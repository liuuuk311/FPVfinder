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
	import Error from '../compontents/Error.svelte';
	import { variables } from '../variables';
	import { _ } from 'svelte-i18n'

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
			callback(data.results);
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
<div class="p-2 pb-0">
	<SearchBar />
</div>
{#await getSearchResults(query, page, loadShippingMethods)}
<p>Loading</p>
{:then data}
{#if data.count > 0}
<div class="flex flex-row my-3 mx-2 justify-between align-middle">
	<p class="text-md text-gray-600 md:text-lg">{$_('results_count')}: {data.count}</p>
	<div class="w-2/6 max-w-xs float-left">
		<div class="relative">
		  <select class="appearance-none w-full bg-gray-200 text-gray-700 p-2 rounded">
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
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 lg:gap-2">
	{#each data.results as product}
		<ProductCard product={product} shippingMethods={shippingMethods[product.store.id]} />
	{/each}
</div>
<Pagination totalItems={data.count} currentPage={page} query={query}/>
{:else}
	<NoResults />
{/if}
{:catch}
<Error/>
{/await}
<Footer />