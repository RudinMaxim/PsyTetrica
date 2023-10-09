export const API_URL =
	process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

if (!API_URL || !/^https?:\/\//i.test(API_URL)) {
	throw new Error('Invalid API URL');
}
