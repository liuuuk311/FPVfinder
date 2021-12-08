<script>
    import { suggestions } from '../stores/suggestionsStore';
    import { setKeywordsAndSearch } from '../helpers/search';

    export let overlay;

</script>
{#if $suggestions.length > 0 && !overlay}
    <div class="flex flex-col mt-3 py-2 bg-white text-gray-600 dark:bg-gray-600 dark:text-gray-100 rounded-lg">
        {#each $suggestions as item}
            <p class="px-3 py-2 text-sm text-semibold truncate" on:click={() => setKeywordsAndSearch(item)}>{item}</p>
        {/each}
    </div>
{:else if $suggestions.length > 0 && overlay}
<div class="absolute z-10 flex flex-grow left-1/2 transform -translate-x-1/2">
    <div class="flex flex-col mt-3 py-2 bg-white text-gray-600 dark:bg-gray-600 dark:text-gray-100 rounded-lg">
        {#each $suggestions as item}
            <p class="px-3 py-2 text-sm text-semibold truncate" on:click={() => setKeywordsAndSearch(item)}>{item}</p>
        {/each}
    </div>
</div>
{/if}