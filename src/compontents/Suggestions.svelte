<script>
    import { suggestions } from '../stores/suggestionsStore';
    import { setKeywordsAndSearch } from '../helpers/search';
</script>

{#if $suggestions.length > 0}
    <div class="flex flex-col mt-3 bg-white text-gray-600 dark:bg-gray-600 dark:text-gray-100 rounded-lg divide-y divide-soild">
        {#each $suggestions as item}
            <p class="px-3 py-2 text-sm text-semibold truncate hover:bg-gray-300" on:click={() => setKeywordsAndSearch(item)}>{item}</p>
        {/each}
    </div>
{/if}