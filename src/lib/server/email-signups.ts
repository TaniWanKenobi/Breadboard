import { env } from '$env/dynamic/private';
import { Pool } from 'pg';

declare global {
	// Reuse a single pool during dev HMR to avoid connection leaks.
	var __breadboardPgPool: Pool | undefined;
}

function getConnectionString() {
	return env.DATABASE_URL ?? env.POSTGRES_URL ?? '';
}

function getPool() {
	if (!globalThis.__breadboardPgPool) {
		const connectionString = getConnectionString();

		if (!connectionString) {
			throw new Error('Missing DATABASE_URL or POSTGRES_URL environment variable');
		}

		globalThis.__breadboardPgPool = new Pool({
			connectionString,
			ssl: connectionString.includes('localhost') ? undefined : { rejectUnauthorized: false }
		});
	}

	return globalThis.__breadboardPgPool;
}

export async function saveEmailSignup(email: string) {
	const pool = getPool();

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
}
