import { query } from "$app/server";
import { db } from "$lib/db";
import { users } from "$lib/db/schema";
import { getRequestEvent } from "@app/server";

export const getUsers = query(async () => {
  const usersData = await db.select().from(users);
  return usersData;
});

export const getCurrentUser = query(async () => {
  const session = await getSession();

  return user;
});

const getSessionUser = query(async () => {
  const requestEvent = getRequestEvent();
  const session = await requestEvent.locals.auth();

  return session?.user;
});
