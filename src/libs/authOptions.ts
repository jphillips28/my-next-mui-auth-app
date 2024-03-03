import GithubProvider from "next-auth/providers/github";

export const authOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID ?? "",
			clientSecret: process.env.GITHUB_SECRET ?? "",
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	// callbacks: {
	// 	async jwt({ token, profile }: any) {
	// 		if (profile) {
	// 			token.externalId = profile.extension_ExternalID;
	// 			token.postalCode = profile.postalCode;
	// 			token.userType = profile.extension_UserType;
	// 		}
	// 		return token;
	// 	},
	// 	async session({ session, token }: any) {
	// 		if (token) {
	// 			session.user.externalId = token.externalId;
	// 			session.user.postalCode = token.postalCode;
	// 			session.user.userType = token.userType;
	// 		}
	// 		return session;
	// 	},
	// },
	debug: true,
};
