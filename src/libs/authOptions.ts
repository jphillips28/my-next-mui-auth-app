import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID ?? "",
			clientSecret: process.env.GITHUB_SECRET ?? "",
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		maxAge: 30 * 60, // minutes * seconds/minute = seconds
	},
	// debug: true,
};
