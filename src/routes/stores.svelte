<script>
    import { variables } from '../variables';
    import { getLocaleFromNavigator } from "svelte-i18n";
    import Error from '../compontents/Error.svelte';
	import Loading from '../compontents/Loading.svelte';

    async function getStores() {
		const response = await fetch(`${variables.apiURL}/api/v1/stores/`, {
			headers: {
				'Content-Type': 'application/json',
				'Accept-Language': getLocaleFromNavigator(),
			}
		});
		const data = await response.json();
		return response.ok ? data : { error: res };
	}
</script>
{#await getStores()}
<div class="flex flex-grow">
	<Loading/>
</div>
{:then data}
<div class="mx-4 md:mx-0">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {#each data.results as country}
        <div class="">
            <h2 class="text-4xl font-semibold">{country.name}</h2>
            {#each country.stores as store}
            <div class="my-3">
                <div class="text-xl">{store.name}</div>
                <div class="text-md text-blue-700 dark:text-blue-300"><a href={store.website}>{store.website}</a></div>
            </div>
            {/each}
        </div>
        {/each}
    </div>
</div>
{:catch}
	<Error/>
{/await}

