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
	import { variables } from '../variables';

	import SearchBar from '../compontents/search/SearchBar.svelte';
	import Filters from '../compontents/search/Filters.svelte';
	import ProductGrid from '../compontents/search/ProductGrid.svelte';
	import Pagination from '../compontents/search/Pagination.svelte';
	import NoResults from '../compontents/search/NoResults.svelte';
	import Error from '../compontents/Error.svelte';
	import Loading from '../compontents/Loading.svelte';
	

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
<div class="flex flex-grow">
	<Loading/>
</div>
{:then data}
{#if data.count > 0}
	<Filters productsCount={data.count}/>
	<ProductGrid data={data}/>
	<Pagination totalItems={data.count} currentPage={page} query={query}/>
{:else}
	<NoResults />
{/if}
{:catch}
	<Error/>
{/await}
