import * as v from "valibot";
import { query, form, getRequestEvent } from "$app/server";
import { db } from "$lib/db";
import { users } from "$lib/db/schema";
import { eq } from "drizzle-orm";

export const getUsers = query(async () => {
  const usersData = await db.select().from(users);
  return usersData;
});

export const getCurrentUser = query(async () => {
  const requestEvent = getRequestEvent();
  const session = await requestEvent.locals.auth();

  let auth = session?.user;
  let email = auth?.email as string;
  let user = null;

  if (auth) {
    user = await db.query.users.findFirst({
      where: (usr, { eq }) => eq(usr.email, email),
    });
  }
  return { user, auth };
});

export const setUserProfile = form(
  v.object({
    name: v.pipe(v.string(), v.nonEmpty()),
    units: v.picklist(["metric", "imperial"]),
  }),
  async ({ name, units }) => {
    const session = await getRequestEvent().locals.auth();
    if (!session?.user?.id) {
      return { status: 401 };
    }

    const user = session?.user;

    if (user) {
      await db.update(users).set({ name, units }).where(eq(users.id, user.id));
    }
  }
);
