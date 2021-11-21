<script>
    let isPriceSortedAsc = true;

    const switchPriceSorting = (event) => {
        event.preventDefault();
        isPriceSortedAsc = !isPriceSortedAsc;
    }
</script>

<div class="mb-2">
    <button class="text-gray-500 text-sm rounded-full py-2 px-4 font-bold border-2 border-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        Filtri
    </button>
    <button on:click={switchPriceSorting} class="text-gray-500 text-sm rounded-full py-2 px-4 font-bold border-2 border-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {#if isPriceSortedAsc}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            {:else}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
            {/if}
        </svg>  
        Prezzo
    </button>
</div>