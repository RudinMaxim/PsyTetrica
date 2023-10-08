import NextAuth from 'next-auth';
import type { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'email',
					type: 'email',
					placeholder: 'email',
				},
				password: {
					label: 'password',
					type: 'password',
					placeholder: 'password',
				},
			},
			async authorize(credentials, req) {
				if (!credentials?.email || !credentials.password) return null;

				const payload = {
					email: credentials?.email,
					password: credentials?.password,
				};

				const res = await fetch(`http://localhost:8080/login`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(payload),
				});

				const user = await res.json();

				if (res.ok && user) {
					const { password, ...userInfo } = user;
					return userInfo as User;
				}

				return null;
			},
		}),
	],
	callbacks: {
		async jwt({ token, account, profile }) {
			if (account) {
				token.accessToken = account.access_token;
				token.email = profile?.email;
			}
			return token;
		},
		async session({ session, token, user }) {
			return session;
		},
	},
	pages: {
		signIn: '/login',
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
