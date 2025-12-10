<script>
  import { getUsers } from "./data.remote";
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>

<div>
  <h2>Add User later</h2>
</div>

<div>
  <h2>Users where are you</h2>
  <ul>
    {#each await getUsers() as { id, name, email }}
      <li>user: {id} - {name} - {email}</li>
    {/each}
  </ul>
</div>

<style>
  :global(body) {
    background-color: rgb(227, 227, 227);
  }
</style>
