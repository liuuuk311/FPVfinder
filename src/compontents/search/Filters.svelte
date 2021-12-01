<script>
    import { _ } from 'svelte-i18n'
    import { variables } from '../../variables'

    export let productsCount;
    
    async function getStores() {
		const res = await fetch(`${variables.apiURL}/api/v1/stores/`, {
			headers: {
				'Content-Type': 'application/json',
			}
		});
		return res.ok ? await res.json() : { error: res };
	}
</script>

<div class="flex flex-row my-3 mx-2 justify-between align-text-bottom">
    {#await getStores()}
        <p></p>
    {:then data} 
    <div class="flex items-end justify-center">
        <p class="text-sm md:text-md text-gray-600 md:text-lg">{productsCount} {$_('products_from')} {data.count} {$_('stores')}</p>  
    </div> 
    {/await}
   
    <div class="flex flex-row w-1/2 max-w-xs justify-end">
        <div class="mx-2">
            <button class="appearance-none w-full bg-gray-200 text-gray-700 p-2 rounded hidden md:block">Filtri</button>
            <button class="appearance-none w-full bg-gray-200 text-gray-700 p-2 rounded md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            </button>
        </div>
        <div class="">
            <div class="relative">
            <select class="appearance-none w-full bg-gray-200 text-gray-700 p-2 pr-8 rounded">
                <option>{$_('order_by_relevance')}</option>
                <option>{$_('order_by_popularity')}</option>
                <option>{$_('order_by_price')}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
            </div>
        </div>
    </div>
</div>