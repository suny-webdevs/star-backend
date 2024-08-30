const { default: NextAuth } = require("next-auth/next");
import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";

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
        const { email } = credentials;

        if (!credentials) return null;
        if (email) {
          const { data } = await axios(
            `${process.env.NEXT_PUBLIC_API_URL}/api/users`,
          );
          const users = data.users;
          const thisUser = users.find((user) => user.email === email);
          if (thisUser) return { ...thisUser };
        }
        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
