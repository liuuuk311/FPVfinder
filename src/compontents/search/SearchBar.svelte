<script>
	import { _ } from 'svelte-i18n'
	import { goto } from '$app/navigation';
	import { keywords } from '../../stores/keywordsStore.js';
	import { variables } from '../../variables';

	let searchedKeywords;
	keywords.subscribe(value => {
		searchedKeywords = value;
	});

	const search = (event) => {
		event.preventDefault();
		keywords.set(searchedKeywords);
		goto(`/search/?q=${searchedKeywords}`)
	}
</script>


<div class="dark:bg-gray-700">
	<div class="flex flex-col mx-auto max-w-7xl md:flex-row md:justify-start items-center mb-2 pb-4 px-2">
		<form on:submit={search} class="w-full md:flex-grow">
			<div class="flex-grow items-center bg-white dark:bg-gray-600 dark:text-gray-100 rounded-full overflow-hidden">
				<input bind:value={searchedKeywords} input="text" class="appearance-none border-none focus:border-none text-sm md:text-base text-gray-400 bg-white dark:bg-gray-600 dark:text-gray-100 flex-grow outline-none py-3 mx-2 px-2 md:w-5/6" placeholder="{$_('search_placeholder')}" />
				<button on:click={search} class="bg-{variables.mainAccentColor} text-white text-base rounded-full py-3 px-5 font-bold float-right hidden md:block">{$_('search_btn')}</button>
				<button on:click={search} class="bg-{variables.mainAccentColor} text-white text-xs rounded-full py-3 px-5 font-bold float-right md:hidden">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</button>
			</div>
		</form>
	</div>
</div>
