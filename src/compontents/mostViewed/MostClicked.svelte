<script>
	import { _, getLocaleFromNavigator } from "svelte-i18n";
	import { variables } from '../../variables';

	import ProductGrid from '../search/ProductGrid.svelte';
	import NoResults from '../search/NoResults.svelte';
	import Error from '../Error.svelte';
	import Loading from '../Loading.svelte';

	async function getBestProducts() {
		const response = await fetch(`${variables.apiURL}/api/v1/products/best`, {
			headers: {
				'Content-Type': 'application/json',
				'Accept-Language': getLocaleFromNavigator(),
			}
		});
		const data = await response.json();
		return response.ok ? data : { error: res };
	}	
</script>

{#await getBestProducts()}
<div class="flex flex-grow">
	<Loading/>
</div>
{:then data}
{#if data.count > 0}
	<h2 class="text-2xl text-center md:text-4xl md:text-left my-5">{$_('most_clicked_title')}</h2>
	<ProductGrid data={data}/>
{:else}
	<NoResults />
{/if}
{:catch}
	<Error/>
{/await}
