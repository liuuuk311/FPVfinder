<script context="module">
	import { variables } from '../variables';
	import { getLocaleFromNavigator } from "svelte-i18n";


	async function getShippingMethods(id) {
		const res = await fetch(`${variables.apiURL}/api/v1/shipping_methods/${id}/`, {
			headers: {
				'Content-Type': 'application/json',
				'Accept-Language': getLocaleFromNavigator(),
			}
		});
		return res.ok ? await res.json() : { error: res };
	}

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, stuff }) {
		const url = `${variables.apiURL}/api/v1/products/?search=name:${page.query.get('q')}`;
		const res = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				'Accept-Language': getLocaleFromNavigator(),
			}
		});

		if (res.ok) {
			let products = await res.json();
			let storesId = Array.from(new Set(products.map((product) => product.store.id)));
			return {
				props: {
					products: products,
					storesId: storesId
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import SearchBar from '../compontents/search/SearchBar.svelte';
	import ProductCard from '../compontents/search/ProductCard.svelte';
	import Footer from '../compontents/Footer.svelte';
	import NoResults from '../compontents/search/NoResults.svelte';

	export let products;
	export let storesId;

	let shippingMethods = {};
	setTimeout(
		() => storesId.map(async (id) => (shippingMethods[id] = await getShippingMethods(id))),
		1000
	);
</script>

{#if products.length > 1}
	<div class="p-2 max-w-4xl">
		<SearchBar />

		<div class="grid grid-cols-1 gap-2">
			{#each products as product}
				<ProductCard {product} shippingMethods={shippingMethods[product.store.id]} />
			{/each}
		</div>
	</div>
	<Footer />
{:else}
	<div class="p-2 max-w-4xl">
		<SearchBar />
	</div>
	<NoResults />
	<div class="fixed bottom-0 left-0 w-full">
		<Footer />
	</div>
{/if}
