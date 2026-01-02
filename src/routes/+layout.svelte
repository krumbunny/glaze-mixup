<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import "../app.css";
  import Header from "$lib/components/header.svelte";
  import type { User } from "$lib/db/schema";
  import { setContext } from "svelte";

  let { children, data } = $props();

  setContext("user", () => data.session?.user);  
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-gray-100 flex flex-col">
  <Header/>
  <main class="flex-1 overflow-y-auto">
    {@render children()}
  </main>
</div>
