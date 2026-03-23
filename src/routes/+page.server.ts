import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { saveEmailSignup } from '$lib/server/email-signups';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const actions: Actions = {
	subscribe: async ({ request }) => {
		const formData = await request.formData();
		const email = String(formData.get('email') ?? '')
			.trim()
			.toLowerCase();

		if (!EMAIL_REGEX.test(email)) {
			return fail(400, {
				success: false,
				message: 'Please enter a valid email address.',
				email
			});
		}

		try {
			await saveEmailSignup(email);
			return {
				success: true,
				message: "Thanks! I'll email you with more details soon.",
				email: ''
			};
		} catch (error) {
			console.error('Failed to save email signup', error);
			return fail(500, {
				success: false,
				message: 'Unable to save your email right now. Please try again.',
				email
			});
		}
	}
};
