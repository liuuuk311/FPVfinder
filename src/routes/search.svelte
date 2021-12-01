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
	import Filters from '../compontents/search/Filters.svelte';
	import ProductGrid from '../compontents/search/ProductGrid.svelte';
	import Pagination from '../compontents/search/Pagination.svelte';
	import Footer from '../compontents/Footer.svelte';
	import FixedFooter from '../compontents/FixedFooter.svelte';
	import NoResults from '../compontents/search/NoResults.svelte';
	import Error from '../compontents/Error.svelte';
	import { variables } from '../variables';

	export let query;
	export let page;

	async function getSearchResults(query, page) {
		const response = await fetch(`${variables.apiURL}/api/v1/products/?search=${query}&page=${page}`, {
			headers: {
				'Content-Type': 'application/json',
				'Accept-Language': getLocaleFromNavigator(),
			}
		});
		const data = await response.json();
		return response.ok ? data : { error: res };
	}	
</script>
<SearchBar />
{#await getSearchResults(query, page)}
<p>Loading</p>
{:then data}
{#if data.count > 0}
	<Filters productsCount={data.count}/>
	<ProductGrid data={data}/>
	<Pagination totalItems={data.count} currentPage={page} query={query}/>
	<Footer />
{:else}
	<NoResults />
	<FixedFooter/>
{/if}
{:catch}
	<Error/>
	<FixedFooter/>
{/await}
