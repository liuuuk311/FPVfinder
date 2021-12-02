<script>
	import { variables } from '../../variables';
	import { getLocaleFromNavigator } from "svelte-i18n";
    import ProductCard from './ProductCard.svelte';

    export let data;
    let shippingMethods = {};
    
    async function getShippingMethods(id) {
		const res = await fetch(`${variables.apiURL}/api/v1/shipping_methods/${id}/`, {
			headers: {
				'Content-Type': 'application/json',
				'Accept-Language': getLocaleFromNavigator(),
			}
		});
		return res.ok ? await res.json() : { error: res };
	}

    function loadShippingMethods(products) {
		setTimeout(
			() => Array.from(new Set(
				products
				.map((product) => product.store.id)))
				.map(async (id) => (shippingMethods[id] = await getShippingMethods(id))),
			500
		)
	}

    loadShippingMethods(data.results)
    
</script>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
	{#each data.results as product}
		<ProductCard product={product} shippingMethods={shippingMethods[product.store.id]} />
	{/each}
</div>
