<script lang="ts">
    import { getCurrentUser } from "../data.remote";
    import { goto } from "$app/navigation";

    let { user } = await getCurrentUser();

    let name = user?.name as string;
    let email = user?.email as string;
    
</script>

<div class="prose m-4">
    <h1>Profile</h1>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
</div>

