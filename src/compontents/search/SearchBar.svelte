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


<div class="flex flex-col md:flex-row md:justify-start items-center mb-2 p-2 pb-0">
	<a href="/"><div class="my-4 text-2xl font-bold text-gray-700 md:text-lg md:pr-5 md:w-32">FPV Finder</div></a>
	<form on:submit={search} class="w-full md:flex-grow">
		<div class="flex-grow items-center bg-white rounded-full overflow-hidden">
			<input bind:value={searchedKeywords} input="text" class="appearance-none border-none focus:border-none text-sm md:text-base text-gray-400 flex-grow outline-none py-3 mx-2 px-2 md:w-5/6" placeholder="{$_('search_placeholder')}" />
			<button on:click={search} class="bg-indigo-500 text-white text-base rounded-full py-3 px-5 font-bold float-right hidden md:block">{$_('search_btn')}</button>
			<button on:click={search} class="bg-indigo-500 text-white text-xs rounded-full py-3 px-5 font-bold float-right md:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				  </svg>
			</button>
		</div>
	</form>
</div>
