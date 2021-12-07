<script>
    import { variables } from '../../variables';
	import { getLocaleFromNavigator } from 'svelte-i18n';
	import Error from '../Error.svelte';
	import Loading from '../Loading.svelte';
    import StoresList from './StoresList.svelte';

	async function getStores() {
		const response = await fetch(`${variables.apiURL}/api/v1/stores/`, {
			headers: {
				'Content-Type': 'application/json',
				'Accept-Language': getLocaleFromNavigator()
			}
		});
		const data = await response.json();
		return response.ok ? data : { error: res };
	}
</script>
{#await getStores()}
	<div class="flex flex-grow h-72">
		<Loading />
	</div>
{:then data}
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
    {#each data.results as country}
        <div class="">
            <h2 class="text-4xl font-semibold">{country.name}</h2>
            <StoresList stores={country.stores} />
        </div>
    {/each}
</div>
{:catch}
	<Error />
{/await}