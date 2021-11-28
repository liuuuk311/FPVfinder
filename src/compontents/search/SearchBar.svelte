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


<div class="flex flex-row justify-around md:justify-start items-center mb-2">
	<a href="/"><div class="text-xs font-bold text-gray-700 pr-2 md:text-lg">FPV Finder</div></a>
	<form  on:submit={search} class="flex-grow">
		<div class="flex-grow items-center bg-white rounded-full overflow-hidden">
			<input bind:value={searchedKeywords} class="text-xs sm:text-sm md:text-base text-gray-400 flex-grow outline-none py-2 mx-2 px-2 md:w-5/6" type="text" placeholder="{$_('search_placeholder')}" />
			<button on:click={search} class="bg-indigo-500 text-white text-xs sm:text-sm md:text-base rounded-full sm:py-2 sm:px-5 py-2 px-3 font-bold float-right">{$_('search_btn')}</button>
		</div>
	</form>
</div>
