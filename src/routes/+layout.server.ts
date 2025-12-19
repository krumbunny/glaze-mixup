import { db } from "$lib/db";
import { users } from "$lib/db/schema";

export const load = async (event) => {
  const session = await event.locals.auth();

  let user = null;
  let newUser = false;
  let email = session?.user?.email as string;

  if (email) {
    user = await db.query.users.findFirst({
      where: (usr, { eq }) => eq(usr.email, email),
    });
  }

  if (!user && email) {
    let name = session?.user?.name as string;
    if (!name) {
      name = email.split("@")[0];
    }

    let newUsers = await db
      .insert(users)
      .values({
        email,
        name,
      })
      .returning();

    newUser = true;
    user = newUsers[0];
  }

  return {
    session,
    user,
    newUser,
  };
};
