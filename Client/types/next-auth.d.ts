import { DefaultSession, DefaultUser } from 'next-auth';
import { JWT, DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
	interface Session {
		user: {
			id: string;
			username: string;
			email: string;
			date_of_birth: string;
			role: string;
			image: string;
			description: string;
			accessToken: string;
		};
	}

	interface User extends DefaultUser {
		role: string;
		accessToken: string;
	}
}

declare module 'next-auth/jwt' {
	interface JWT extends DefaultJWT {
		role: string;
		accessToken: string;
		refreshToken: string;
	}
}
