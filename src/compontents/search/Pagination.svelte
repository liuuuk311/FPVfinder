<script>
    import { keywords, page as currentPage } from '../../stores/parametersStore';

    import { variables } from '../../variables';

    export let totalItems;

    const totalPages = Math.min(parseInt(totalItems) < 30 ? 1 : parseInt(totalItems/30), 10)

    function goToPage(pageNumber) {
        currentPage.set(pageNumber)
        const nextURL = `/search?q=${$keywords}&page=${pageNumber}`
        window.history.pushState({}, window.document.title, nextURL);
    }
</script>
{#if totalPages > 1}
<div class="flex flex-col items-center my-12">
    <div class="flex text-gray-700 dark:text-gray-300">
        {#if $currentPage > 1 }
        <div class="h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer">
            <button on:click|preventDefault={() => goToPage(parseInt($currentPage)-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-4 h-4">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
        </div>
        {/if}
        <div class="flex h-8 font-medium rounded-full bg-gray-200 dark:bg-gray-700">
            {#each Array(totalPages - 1) as _, p}
                <div class="w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full {parseInt(p) + 1 == currentPage ? `bg-${variables.mainAccentColor} text-white`: ''}">
                    <button on:click|preventDefault={() => goToPage(parseInt(p)+1)}>
                        {p + 1}
                    </button>
                </div>
            {/each}
            <div class="w-8 h-8 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-{variables.mainAccentColor} text-white">{$currentPage}</div>
        </div>
        {#if parseInt($currentPage) + 1 !== totalPages}
        <div class="h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer">
            <button on:click|preventDefault={() => goToPage(parseInt($currentPage)+1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-4 h-4">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button> 
        </div>
        {/if}
    </div>
</div>
{/if}