<script>
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import { setKeywordsAndSearch } from '../../helpers/search';
	import { variables } from '../../variables';
	import { theme } from '../../stores/preferences';
	import { getSuggestions } from '../../api/suggestions';
	import Suggestions from '../Suggestions.svelte';

	let typedKeywords = '';
	let searchInput;
	let y;

	onMount(() => searchInput.focus());
</script>

<svelte:window bind:scrollY={y}/>

<div class="flex flex-col" style="height: 93vh;">
	<div class="mx-4 md:mx-auto lg:w-full max-w-3xl items-center my-auto">
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
						on:input={() => getSuggestions(typedKeywords)}
						class="text-base text-gray-400 bg-white dark:bg-gray-600 dark:text-gray-100 flex-grow outline-none focus:outline-none py-3 px-2 mx-2"
						placeholder={$_('search_placeholder')}
						input=search
					/>
					<button 
						on:click={() => setKeywordsAndSearch(typedKeywords)}  aria-label="clear-text"
						class="bg-{variables.mainAccentColor} text-white text-base rounded-full py-3 px-5 font-bold float-right hidden md:block">
						{$_('search_btn')}
					</button>
					<button 
						on:click={() => setKeywordsAndSearch(typedKeywords)} aria-label="search" 
						class="bg-{variables.mainAccentColor} text-white text-xs rounded-full py-3 px-5 font-bold float-right md:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
					</button>
				</div>
				<Suggestions/>
			</div>
		</form>	
	</div>
	<div class="mx-auto lg:w-full max-w-3xl items-center my-auto my-container" style="opacity: {1 - Math.max(0, y / 500)}">
		<div class="chevron {$theme === 'light' ? 'chevron-light': 'chevron-dark'}" ></div>
		<div class="chevron {$theme === 'light' ? 'chevron-light': 'chevron-dark'}"></div>
		<div class="chevron {$theme === 'light' ? 'chevron-light': 'chevron-dark'}"></div>
		<span class="text text-gray-700 dark:text-white">Scroll down</span>
	</div>
</div>
<style>
.my-container {
  position: relative;
  width: 24px;
  height: 24px;
}

.chevron {
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;
}

.chevron:first-child {
  animation: move 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: ' ';
  position: absolute;
  top: 0;
  height: 100%;
  width: 51%;
}
.chevron-dark:before,
.chevron-dark:after {
	background: rgb(229 231 235);
}
.chevron-light:before,	
.chevron-light:after {
	background:  rgb(75 85 99);
}

.chevron:before {
  left: 0;
  transform: skew(0deg, 30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skew(0deg, -30deg);
}

@keyframes move {
  25% {
    opacity: 1;

  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}

.text {
  display: block;
  margin-top: 75px;
  margin-left: -30px;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: .25;
  /* color: #eda550; */
  animation: pulse 2s linear alternate infinite;
}

@keyframes pulse {
  to {
    opacity: 1;
  }
}
</style>