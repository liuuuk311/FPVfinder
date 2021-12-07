<script>
    import { _ } from 'svelte-i18n';
    import { variables } from '../../variables';
    import { ordering } from '../../stores/parametersStore';
    import FiltersModal from './FiltersModal.svelte';

    export let productsCount;
    
    async function getStores() {
		const res = await fetch(`${variables.apiURL}/api/v1/stores/stats`, {
			headers: {
				'Content-Type': 'application/json',
			}
		});
		return res.ok ? await res.json() : { error: res };
	}

    let isModalOpen = false;
    let selectedOrderingMethod = $ordering || 'relevance';
    let orderingMethods = [
        {id: 'relevance', text: $_('order_by_relevance')},
        {id: 'popularity', text: $_('order_by_popularity')},
        {id: 'price_asc', text: $_('order_by_price_asc')},
        {id: 'price_desc', text: $_('order_by_price_desc')},
    ];

    function setOrdering() {
        ordering.set(selectedOrderingMethod);
    }
    

    const toggleModal = (event) => {
        isModalOpen = !isModalOpen;
    }
</script>
{#if isModalOpen}
  <FiltersModal toggleModal={toggleModal}/>
{/if}
<div class="flex flex-row justify-between items-center my-3 p-2">
    {#await getStores()}
        <p></p>
    {:then data} 
    <div class="flex items-center justify-center">
        <p class="text-sm text-gray-600 dark:text-gray-300 md:text-lg">{productsCount} {$_('products_from')} {data.total_stores} {$_('stores')}</p>  
    </div> 
    {/await}
   
    <div class="flex flex-row flex-grow w-1/2 max-w-xs justify-end">
        <div class="mx-2">
            <button on:click={toggleModal}  class="md:flex md:flex-row hidden bg-gray-200 rounded-full p-2 px-5 dark:bg-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <span class="appearance-none w-full text-gray-700 dark:text-gray-300">
                    {$_('filter_title')}
                </span>
            </button>
            <button on:click={toggleModal} class="appearance-none w-full bg-gray-200 dark:bg-gray-600 p-2 px-3 rounded-full md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            </button>
        </div>
        <div class="">
            <div class="relative">
                <select 
                    bind:value={selectedOrderingMethod}
                    on:change={setOrdering}
                    class="appearance-none w-full bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-300 p-2 px-3 pr-6 rounded-full text-center"
                    >
                    {#each orderingMethods as choice}
                        <option value={choice.id}>
                            {choice.text}
                        </option>
                    {/each}
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
            </div>
        </div>
    </div>
</div>