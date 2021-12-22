<script>
	import { _ } from 'svelte-i18n'
	import { keywords, page } from '../../stores/parametersStore.js';
	import { suggestions } from '../../stores/suggestionsStore.js';
	import { variables } from '../../variables';


	let searchedKeywords;
	let showClearSearchButton = false;

	keywords.subscribe(value => {
		searchedKeywords = value;
	});

	const clearInput = (event) => {
		searchedKeywords = "";
		suggestions.set([])
		showClearSearchButton = false;
	}

	const showClearButton = (event) => {
		if (searchedKeywords === "") return
		showClearSearchButton = true
	}

	const performSearch = () => {
		keywords.set(searchedKeywords)
		page.set(1)
		const nextURL = `/search?q=${$keywords}`
        window.history.pushState({}, window.document.title, nextURL);
	}
</script>


<div class="dark:bg-gray-800">
	<div class="flex flex-col px-2">
		<form on:submit|preventDefault={() => performSearch()} class="w-full md:flex-grow">
			<div class="flex-grow items-center bg-white dark:bg-gray-600 dark:text-gray-100 rounded-full overflow-hidden">
				<input 
					on:focus={showClearButton}
					bind:value={searchedKeywords}
					input="search" 
					class="appearance-none border-none focus:border-none text-sm md:text-base text-gray-400 bg-white dark:bg-gray-600 dark:text-gray-100 outline-none py-3 ml-2 pl-2 lg:w-4/5" 
					placeholder="{$_('search_placeholder')}" />
				
				<button 
					on:click|preventDefault={() => performSearch()} 
					class="bg-{variables.mainAccentColor} text-white text-base rounded-full py-3 px-5 font-bold float-right hidden md:block">
					{$_('search_btn')}
				</button>
				<button 
					on:click|preventDefault={() => performSearch()} 
					class="bg-{variables.mainAccentColor} text-white text-xs rounded-full py-3 px-5 font-bold float-right md:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
				</button>
				<button 
					on:click|preventDefault={clearInput}
					class="text-gray-600 dark:text-gray-200 text-xs md:text-base float-right p-3 {showClearSearchButton ? '' : 'hidden'}">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
				</button>
			</div>
		</form>
	</div>
</div>
