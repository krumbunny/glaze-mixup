<script lang="ts">
  import { getUsers } from "./data.remote";
  import type { PageProps } from "./$types";
  import { signIn, signOut } from "@auth/sveltekit/client";
  import Button from "$lib/components/ui/button/button.svelte";

  let { data }: PageProps = $props();
</script>

<div class="prose m-4">
  <h1>Welcome to SvelteKit</h1>
  <p>
    Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
    documentation
  </p>

  <div>
    {#if data.session}
      <Button variant="outline" onclick={() => signOut()}>Sign out</Button>
      <pre>Session: {JSON.stringify(data.session, null, 2)}</pre>
      {#if data.session.user}
        <p>user image URL is: {data.session.user.image}</p>
        <img src={data.session.user.image} alt="User Avatar" />
      {/if}
      {#if data.user}
        <p>user name is: {data.user.name}</p>
        {#if data.newUser}
          <p>This is a new user</p>
        {/if}
      {/if}
    {:else}
      <Button variant="outline" onclick={() => signIn("google")}
        >Sign in with Google</Button
      >
    {/if}
  </div>

  <div>
    <h2>Add User</h2>
    <p>TODO: Add a form to add a user</p>
  </div>

  <div>
    <h2>Current Users</h2>
    <ul>
      {#each await getUsers() as { id, name, email }}
        <li>user: {id} - {name} - {email}</li>
      {/each}
    </ul>
  </div>
</div>
