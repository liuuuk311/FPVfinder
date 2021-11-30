<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, stuff }) {
		return {
			props: {
				query: page.query.get('q'),
				page: page.query.get('page') !== null ? page.query.get('page') : 1,
			}
		}
	}
</script>

<script>
	import { getLocaleFromNavigator } from "svelte-i18n";

	import SearchBar from '../compontents/search/SearchBar.svelte';
	import ProductCard from '../compontents/search/ProductCard.svelte';
	import Pagination from '../compontents/search/Pagination.svelte';
	import Footer from '../compontents/Footer.svelte';
	import NoResults from '../compontents/search/NoResults.svelte';
	import Error from './__error.svelte';
	import { variables } from '../variables';

	export let query;
	export let page;

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

	async function getSearchResults(query, page, callback) {
		const response = await fetch(`${variables.apiURL}/api/v1/products/?search=${query}&page=${page}`, {
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
{#await getSearchResults(query, page, loadShippingMethods)}
<p>Loading</p>
{:then data}
{#if data.count > 0}
	<div class="p-2">
		<SearchBar />
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 lg:gap-2">
			{#each data.results as product}
				<ProductCard {product} shippingMethods={shippingMethods[product.store.id]} />
			{/each}
		</div>
		<Pagination totalItems={data.count} currentPage={page} query={query}/>
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
