<script lang="ts">
	import Table from '$lib/Table.svelte';
	import ms from 'ms';

	let searchResults: Array<any>;
	let durration = '';

	async function search(event: any) {
		const fetchStart = Date.now();

		const res = await fetch(
			'/api/search?' +
				new URLSearchParams({
					searchText: event.target.value as string
				})
		);
		const json = await res.json();

		durration = ms(Date.now() - fetchStart);
		searchResults = json.searchResult as Array<JSON>;
	}
</script>

<div class="container h-full mx-auto flex justify-center">
	<div class="space-y-6 mt-60">
		<input type="text" class="border border-gray-300 rounded-md p-2 text-black" on:input={search} />
		<p class="font-bold">What I got is:</p>

		{#if searchResults && searchResults.length > 0}
			{#each searchResults as result}
				<p>
					{result.name} <br />
					{result.email}
				</p>
			{/each}
			<p>taking {durration}</p>
		{:else}
			<p>Nothing</p>
		{/if}
		<!-- <Table users={searchResults} duration="1" /> -->

		<div class="">
			<a href="/" class="text-blue-200">Go back home</a>
		</div>
	</div>
</div>
