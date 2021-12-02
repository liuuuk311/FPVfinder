<script>
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { keywords } from '../stores/keywordsStore.js';
	import { variables } from '../variables';

	let typedKeywords = '';

	const search = (event) => {
		event.preventDefault();
		keywords.set(typedKeywords);
		goto(`/search/?q=${typedKeywords}`);
	};

	let searchInput;

	onMount(() => searchInput.focus());
</script>

<div class="flex flex-col">
	<div class="mx-4 md:mx-auto my-auto">
		<form on:submit={search}>
			<h1 class="text-center font-bold text-gray-700 dark:text-gray-100 text-5xl">
				FPV finder
				<p class="mx-auto font-normal text-xl my-6 max-w-xl dark:text-gray-300">
					{$_('what_we_do')}
				</p>
				<div
					class="flex items-center bg-white dark:bg-gray-600 dark:text-gray-100 rounded-full overflow-hidden justify-between"
				>
					<input
						bind:this={searchInput}
						bind:value={typedKeywords}
						class="text-base text-gray-400 bg-white dark:bg-gray-600 dark:text-gray-100 flex-grow outline-none focus:outline-none py-3 px-2 mx-2"
						placeholder={$_('search_placeholder')}
						input="text"
					/>
					<button on:click={search} class="bg-{variables.mainAccentColor} text-white text-base rounded-full py-3 px-5 font-bold float-right hidden md:block">{$_('search_btn')}</button>
					<button on:click={search} class="bg-{variables.mainAccentColor} text-white text-xs rounded-full py-3 px-5 font-bold float-right md:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</button>
				</div>
			</h1>
		</form>
	</div>
</div>
