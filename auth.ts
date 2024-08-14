import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { authenticate } from "./actions/auth";
import { object, string, ZodError } from "zod";

const signInSchema = object({
  username: string(),
  password: string(),
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        try {
          let user = null;

          // logic to verify if the user exists
          const parsedCredentails = await signInSchema.parseAsync(credentials);
          user = await authenticate(parsedCredentails);

          if (!user) {
            // No user found, so this is their first attempt to login
            // meaning this is also the place you could do registration
            throw new Error("User not found.");
          }

          // return user object with their profile data
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }

          return null;
        }
      },
    }),
    // do callback to get a tocken on the backend for oauth sign in
    Google,
  ],
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error",
  },
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;

      if (pathname === "/dashboard") return Boolean(auth);
      if (pathname.split("/").includes("auth") && Boolean(auth))
        return Response.redirect(new URL("/", request.nextUrl));
      return true;
    },
  },
  session: {
    strategy: "jwt",
  },
  trustHost: true,
});
