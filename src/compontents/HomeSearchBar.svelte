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

<div class="flex flex-col max-w-3xl m-auto">
	<div class="mx-4 md:mx-auto py-16">
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
					<button
						on:click={search}
						class="bg-{variables.mainAccentColor} text-white text-base rounded-full py-3 px-6 font-bold"
						>{$_('search_btn')}</button
					>
				</div>
			</h1>
		</form>
	</div>
</div>
