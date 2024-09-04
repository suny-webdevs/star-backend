const { default: NextAuth } = require("next-auth/next");
import connectDB from "@/lib/connectDB";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_API_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          required: true,
          placeholder: "Enter email",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Enter password",
        },
      },

      async authorize(credentials) {
        const { email, password } = credentials;

        if (!credentials) return null;

        if (email) {
          const db = await connectDB();
          const thisUser = await db.collection("users").findOne({ email });
          if (thisUser) {
            const isMatch = thisUser.password === password;
            if (isMatch) return { ...thisUser };
          }
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }) {
      if (account) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
