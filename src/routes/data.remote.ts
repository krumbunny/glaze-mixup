import { query } from "$app/server";
import { db } from "$lib/db";
import { users } from "$lib/db/schema";

export const getUsers = query(async () => {
  const usersData = await db.select().from(users);
  return usersData;
});
