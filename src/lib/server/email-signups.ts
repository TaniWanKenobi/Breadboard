import { env } from '$env/dynamic/private';
import { createClient } from '@supabase/supabase-js';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { Pool } from 'pg';

declare global {
	// Reuse a single pool during dev HMR to avoid connection leaks.
	var __breadboardPgPool: Pool | undefined;
}

const LOCAL_SIGNUPS_FILE = path.join(process.cwd(), 'data', 'email-signups.json');

function getConnectionString() {
	return env.DATABASE_URL ?? env.POSTGRES_URL ?? '';
}

function getSupabaseConfig() {
	const url = env.SUPABASE_URL ?? process.env.SUPABASE_URL ?? '';
	const key = env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';
	return { url, key };
}

function getPool(connectionString: string) {
	if (!globalThis.__breadboardPgPool) {
		globalThis.__breadboardPgPool = new Pool({
			connectionString,
			ssl: connectionString.includes('localhost') ? undefined : { rejectUnauthorized: false }
		});
	}

	return globalThis.__breadboardPgPool;
}

async function saveEmailSignupLocally(email: string) {
	await mkdir(path.dirname(LOCAL_SIGNUPS_FILE), { recursive: true });

	let entries: { email: string; createdAt: string }[] = [];

	try {
		const existing = await readFile(LOCAL_SIGNUPS_FILE, 'utf8');
		const parsed = JSON.parse(existing) as unknown;
		if (Array.isArray(parsed)) {
			entries = parsed.filter(
				(item): item is { email: string; createdAt: string } =>
					typeof item === 'object' &&
					item !== null &&
					typeof (item as { email?: unknown }).email === 'string' &&
					typeof (item as { createdAt?: unknown }).createdAt === 'string'
			);
		}
	} catch {
		// If the file does not exist or is malformed, start fresh.
		entries = [];
	}

	if (!entries.some((entry) => entry.email === email)) {
		entries.push({ email, createdAt: new Date().toISOString() });
	}

	await writeFile(LOCAL_SIGNUPS_FILE, JSON.stringify(entries, null, 2), 'utf8');
}

export async function saveEmailSignup(email: string) {
	const { url, key } = getSupabaseConfig();

	if (url && key) {
		const supabase = createClient(url, key);
		const { error } = await supabase.from('email_signups').insert({ email });

		if (!error || error.code === '23505') {
			return;
		}
	}

	const connectionString = getConnectionString();

	if (!connectionString) {
		await saveEmailSignupLocally(email);
		return;
	}

	const pool = getPool(connectionString);

	try {
		await pool.query(`
			CREATE TABLE IF NOT EXISTS email_signups (
				id BIGSERIAL PRIMARY KEY,
				email TEXT UNIQUE NOT NULL,
				created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
			)
		`);

		await pool.query(
			`INSERT INTO email_signups (email)
			 VALUES ($1)
			 ON CONFLICT (email) DO NOTHING`,
			[email]
		);
	} catch {
		await saveEmailSignupLocally(email);
	}
}
