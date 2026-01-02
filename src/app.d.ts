// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module "@auth/sveltekit" {
	interface Session {
		user: {
		id: number; // matches schema INTEGER PRIMARY KEY
		} & DefaultSession["user"]
	}
}

declare module "@auth/core/jwt" {
	interface JWT {
		userId?: number;
	}
}
  
export {};
