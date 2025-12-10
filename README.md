# Glaze Mixup

A SvelteKit project with Drizzle ORM and SQLite.

## Tech Stack

- **SvelteKit** - The latest version of Svelte and SvelteKit
- **Drizzle ORM** - Type-safe SQL ORM
- **better-sqlite3** - Fast and reliable SQLite database

## Getting Started

### Install Dependencies

```sh
npm install
```

### Database Setup

The project uses SQLite with Drizzle ORM. The database file (`sqlite.db`) will be created automatically when you first run migrations.

#### Generate Migrations

After modifying the schema in `src/lib/db/schema.ts`, generate migrations:

```sh
npm run db:generate
```

#### Apply Migrations

Apply migrations to create/update the database:

```sh
npm run db:migrate
```

#### Push Schema (Development)

For development, you can push schema changes directly without migrations:

```sh
npm run db:push
```

#### Open Drizzle Studio

View and edit your database with Drizzle Studio:

```sh
npm run db:studio
```

## Development

Start the development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

## Database Usage

Import the database instance in your SvelteKit routes or server files:

```typescript
import { db } from '$lib/db';
import { users } from '$lib/db/schema';

// Example: Query users
const allUsers = await db.select().from(users);

// Example: Insert a user
await db.insert(users).values({
  name: 'John Doe',
  email: 'john@example.com'
});
```

## Project Structure

```
glaze-mixup/
├── src/
│   ├── lib/
│   │   └── db/
│   │       ├── index.ts      # Database connection
│   │       └── schema.ts     # Database schema definitions
│   └── routes/               # SvelteKit routes
├── drizzle/                  # Generated migrations (gitignored)
├── drizzle.config.ts         # Drizzle configuration
└── sqlite.db                 # SQLite database file (gitignored)
```
