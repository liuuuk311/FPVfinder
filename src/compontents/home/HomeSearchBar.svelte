<script>
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { keywords } from '../../stores/parametersStore.js';
	import { variables } from '../../variables';

	let typedKeywords = '';
	let suggestions = [];

	const setKeywordsAndSearch = (input) => {
		keywords.set(input);
		goto(`/search/?q=${input}`);
	}


	async function getSuggestions() {
		if (typedKeywords.length < 3) {
			suggestions = []
			return
		}

        const res = await fetch(`${variables.apiURL}/api/v1/products/autocomplete/functional_suggest/?name_suggest_match__completion_match=${typedKeywords}`, {
			headers: {
				'Content-Type': 'application/json',
			}
		});
		if (!res.ok) {
			suggestions = []
			return
		}

		const data = await res.json()
		suggestions = data.name_suggest_match__completion_match[0].options.map(value => value.text)
    }

	let searchInput;

	onMount(() => searchInput.focus());
</script>

<div class="flex flex-col">
	<div class="mx-4 md:mx-auto lg:w-full max-w-3xl -mt-3">
		<h1 class="text-center font-bold text-gray-700 dark:text-gray-100 text-5xl">
			{variables.websiteName}
		</h1>
		<p class="text-center mx-auto font-normal text-xl my-6 max-w-xl dark:text-gray-300">
			{$_('what_we_do')}
		</p>
		<form on:submit|preventDefault={() => setKeywordsAndSearch(typedKeywords)}>
			<div class="flex flex-col">
				<div class="flex items-center bg-white dark:bg-gray-600 dark:text-gray-100 rounded-full overflow-hidden justify-between">
					<input
						bind:this={searchInput}
						bind:value={typedKeywords}
						on:input={getSuggestions}
						class="text-base text-gray-400 bg-white dark:bg-gray-600 dark:text-gray-100 flex-grow outline-none focus:outline-none py-3 px-2 mx-2"
						placeholder={$_('search_placeholder')}
						input=search
					/>
					<button on:click={() => setKeywordsAndSearch(typedKeywords)} class="bg-{variables.mainAccentColor} text-white text-base rounded-full py-3 px-5 font-bold float-right hidden md:block">{$_('search_btn')}</button>
					<button on:click={() => setKeywordsAndSearch(typedKeywords)} class="bg-{variables.mainAccentColor} text-white text-xs rounded-full py-3 px-5 font-bold float-right md:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</button>
				</div>
				{#if suggestions.length > 0}
				<div class="flex flex-col mt-3 py-2 bg-white text-gray-600 dark:bg-gray-600 dark:text-gray-100 rounded-lg">
					{#each suggestions as item}
						<p class="px-3 py-2 text-sm text-semibold truncate" on:click={() => setKeywordsAndSearch(item)}>{item}</p>
					{/each}
				</div>
				{/if}
			</div>
		</form>
		
	</div>
</div>
