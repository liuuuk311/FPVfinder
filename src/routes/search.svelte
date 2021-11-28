<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, stuff }) {
		return {
			props: {
				query: page.query.get('q')
			}
		}
	}
</script>

<script>
	import { getLocaleFromNavigator } from "svelte-i18n";

	import SearchBar from '../compontents/search/SearchBar.svelte';
	import ProductCard from '../compontents/search/ProductCard.svelte';
	import Footer from '../compontents/Footer.svelte';
	import NoResults from '../compontents/search/NoResults.svelte';
	import Error from './__error.svelte';
	import { variables } from '../variables';

	export let query;

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

	async function getSearchResults(query, callback) {
		const response = await fetch(`${variables.apiURL}/api/v1/products/?search=name:${query}`, {
			headers: {
				'Content-Type': 'application/json',
				'Accept-Language': getLocaleFromNavigator(),
			}
		});
		const data = await response.json();
		if (response.ok) {
			callback(data);
			return data;
		} else {
			throw new Error(data);
		}
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
	
	
</script>
{#await getSearchResults(query, loadShippingMethods)}
<p>Loading</p>
{:then products}
{#if products.length > 0}
	<div class="p-2">
		<SearchBar />
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 lg:gap-2">
			{#each products as product}
				<ProductCard {product} shippingMethods={shippingMethods[product.store.id]} />
			{/each}
		</div>
	</div>
	<Footer />
{:else}
	<div class="p-2">
		<SearchBar />
	</div>
	<NoResults />
	<div class="fixed bottom-0 left-0 w-full">
		<Footer />
	</div>
{/if}
{:catch error}
<p>Error</p>
{console.log(error)}
{/await}
