import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/sveltekit/providers/google";
import { db } from "$lib/db";
import { users } from "$lib/db/schema";

export const { handle, signIn } = SvelteKitAuth({
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
  ],
  trustHost: true, // Required for SvelteKit in development
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // First authentication, try to find existing user
        let dbUser = await db.query.users.findFirst({
          where: (u, { eq }) => eq(u.email, user.email!),
        });
                
        // Create database user if doesn't exist
        if (!dbUser) {
          let email = user.email! as string;
          let name = user.name as string;

          [dbUser] = await db
            .insert(users)
            .values({ email, name })
            .returning();
        }
        
        // remember user id in token
        token.userId = dbUser.id;
      }

      return token;
    },

    async session({ session, token }) {
      if (token.userId) {
        session.user.id = token.userId;
      }
      return session;
    },
  },
});
