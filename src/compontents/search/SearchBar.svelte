<script>
	import { _ } from 'svelte-i18n'
	import { goto } from '$app/navigation';
	import { keywords } from '../../stores/keywordsStore.js';

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


<div class="flex flex-row justify-around md:justify-start items-center mb-2 p-2 pb-0">
	<a href="/"><div class="text-xs font-bold text-gray-700 pr-2 md:text-lg">FPV Finder</div></a>
	<form  on:submit={search} class="flex-grow">
		<div class="flex-grow items-center bg-white rounded-full overflow-hidden">
			<input bind:value={searchedKeywords} class="text-xs sm:text-sm md:text-base text-gray-400 flex-grow outline-none py-2 mx-2 px-2 md:w-5/6" type="text" placeholder="{$_('search_placeholder')}" />
			<button on:click={search} class="bg-indigo-500 text-white text-xs sm:text-sm md:text-base rounded-full sm:py-2 sm:px-5 py-2 px-3 font-bold float-right hidden md:block">{$_('search_btn')}</button>
			<button on:click={search} class="bg-indigo-500 text-white text-xs sm:text-sm md:text-base rounded-full sm:py-2 sm:px-5 py-2 px-3 font-bold float-right md:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				  </svg>
			</button>
		</div>
	</form>
</div>
