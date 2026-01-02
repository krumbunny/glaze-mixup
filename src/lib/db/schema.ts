import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// Example schema - customize as needed
export const users = sqliteTable('users', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	email: text('email').notNull().unique(),
	units: text('units').notNull().default('metric')
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

