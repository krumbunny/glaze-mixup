<script lang="ts">
  import { signIn, signOut } from "@auth/sveltekit/client";
  import googleSVG from "$lib/assets/google.svg";
  import { getContext } from "svelte";
  import type { User } from "$lib/db/schema";
  import { goto } from "$app/navigation";
  import Button from "$lib/components/ui/button/button.svelte";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "$lib/components/ui/dropdown-menu";

  let user = getContext<() => User | null>("user");

  async function logout() {
    await goto("/");
    signOut();
  }
</script>

<div class="container">
  {#if user()}
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">
          {user()?.name || "Unknown"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <a href="/profile">
            <Button variant="ghost" class="w-full text-left">Profile</Button>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button variant="outline" onclick={() => logout()}>Sign out</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  {:else}
    <Button variant="outline" onclick={() => signIn("google")}>
      <img
        src={googleSVG}
        alt="Google"
        class="inline w-5 h-5 mr-2 align-middle"
      />
      Sign in
    </Button>
  {/if}
</div>
