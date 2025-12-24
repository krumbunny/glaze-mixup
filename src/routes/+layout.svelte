<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import "../app.css";
  import Header from "$lib/components/header.svelte";

  let { children, data }: { children: any; data: any } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="fixed inset-0 m-0 p-0 min-h-screen min-w-full bg-gray-100">
  <Header user={data.user} />
  {@render children()}
</div>
