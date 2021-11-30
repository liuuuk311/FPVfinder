<script>
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation';
	import { keywords } from '../../stores/keywordsStore.js';
	let typedKeywords = '';

	const search = (event) => {
		event.preventDefault();
		keywords.set(typedKeywords);
		goto(`/search/?q=${typedKeywords}`);
	};

	
	let searchInput;

	onMount(() => searchInput.focus())
</script>

<div class="flex flex-col max-w-3xl m-auto">
	<div class="mx-4 md:mx-auto py-16">
		<form on:submit={search}>
			<h1 class="text-center font-bold text-gray-700 text-5xl">
				FPV finder
				<p class="mx-auto font-normal text-xl my-6 max-w-xl">{$_('what_we_do')}</p>
				<div class="flex items-center bg-white rounded-full overflow-hidden justify-between">
					<input
						bind:this={searchInput}
						bind:value={typedKeywords}
						class="text-base text-gray-400 bg-white flex-grow outline-none py-3 px-2 mx-2"
						type="text"
						placeholder={$_('search_placeholder')}
					/>
					<button
						on:click={search}
						class="bg-indigo-500 text-white text-base rounded-full py-3 px-6 font-bold"
						>{$_('search_btn')}</button
					>
				</div>
			</h1>
		</form>
	</div>
</div>
