<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import "../app.css";
  import Header from "$lib/components/header.svelte";

  let { children, data }: { children: any; data: any } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-gray-100 flex flex-col">
  <Header user={data.user} />
  <main class="flex-1 overflow-y-auto">
    {@render children()}
  </main>
</div>
