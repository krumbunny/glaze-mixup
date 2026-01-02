<script lang="ts">
  import UserStatus from "$lib/components/user-status.svelte";
</script>

<header class="w-full h-[60px] bg-gray-200 flex items-center px-6 shadow-sm">
  <a href="/" class="hover:underline">
    <h1 class="font-rock-salt font-semibold text-2xl text-gray-700">Mixup</h1>
  </a>
  <div class="ml-auto">
    <UserStatus/>
  </div>
</header>
