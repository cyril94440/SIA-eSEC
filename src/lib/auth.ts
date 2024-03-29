import { compare } from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserJWT } from "@@core/auth";
import { db } from "lib/db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Sign In",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await compare(credentials.password, user.password);

        if (!isPasswordValid) {
          return null;
        }

        console.log("✅ Successfully logged in, returned : ", {
          id: user.id,
          email: user.email,
          fullname: user.fullname,
          image: user.image,
        });

        return {
          id: user.id,
          email: user.email,
          fullname: user.fullname,
          image: user.image,
          role: user.role,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session(params) {
      const token = params.token as any as UserJWT;
      const session = params.session;

      session.user!.name = token.fullname;
      session.user!.email = token.email;
      session.user!.image = token.image;
      session.user!.role = token.role;

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email ?? "",
        },
      });

      if (!dbUser) {
        console.log("no user found");
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      return {
        id: dbUser.id,
        fullname: dbUser.fullname,
        email: dbUser.email,
        image: dbUser.image,
        role: dbUser.role,
      };
    },
  },
  pages: {
    error: "/login",
  },
};
