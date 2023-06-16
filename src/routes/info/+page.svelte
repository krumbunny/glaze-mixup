<script lang="ts">
	import Table from '$lib/Table.svelte';
	let searchResults: Array<any>;

	async function search(event: any) {
		console.log(event.target.value);

		const res = await fetch(
			'/api/search?' +
				new URLSearchParams({
					searchText: event.target.value as string
				})
		);
		const json = await res.json();
		console.log(json);
		searchResults = json.searchResult as Array<JSON>;
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-6 text-center">
		<input type="text" class="border border-gray-300 rounded-md p-2 text-black" on:input={search} />
		<p class="font-bold">What I got is:</p>

		{#if searchResults && searchResults.length > 0}
			{#each searchResults as result}
				<p>
					{result.name} <br />
					{result.email}
				</p>
			{/each}
		{:else}
			<p>Nothing</p>
		{/if}
		<!-- <Table users={searchResults} duration="1" /> -->

		<div class="">
			<a href="/" class="text-blue-200">Go back home</a>
		</div>
	</div>
</div>
