<script context="module">
	import { keywords, page as pageStore } from "../stores/parametersStore";
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		const queryParam = page.query.get('q');
		const pageParam = page.query.get('page') !== null ? page.query.get('page') : 1
		keywords.set(decodeURI(queryParam));
		pageStore.set(decodeURI(pageParam));
		return {
			props: {}
		}
	}
</script>

<script>
	import { onMount } from 'svelte';
	import { getLocaleFromNavigator } from "svelte-i18n";
	import { variables } from '../variables';
	import { availabilityFilter, ordering } from "../stores/parametersStore";
	

	import SearchBar from '../compontents/search/SearchBar.svelte';
	import Filters from '../compontents/search/Filters.svelte';
	import ProductGrid from '../compontents/search/ProductGrid.svelte';
	import Pagination from '../compontents/search/Pagination.svelte';
	import NoResults from '../compontents/search/NoResults.svelte';
	import Error from '../compontents/Error.svelte';
	import Loading from '../compontents/Loading.svelte';

	let data = undefined;

	async function getSearchResults(query, page) {
		data = undefined;
		const url = `${variables.apiURL}/api/v1/products/?search=${query}&page=${page}${getIsAvailable()}${getOrdering()}`;
		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				'Accept-Language': getLocaleFromNavigator(),
			}
		});
		data = response.ok ? await response.json() : { error: response };
	}
	
	function getIsAvailable() {
		switch ($availabilityFilter) {
			case 2: return '&is_available=true'
			case 3: return '&is_available=false'
			default: return ''
		}
	}

	function getOrdering() {
		switch ($ordering) {
			case 'price_desc': return '&ordering=-price'
			case 'price_asc': return '&ordering=price'
			case 'popularity': return '&ordering=-clicks'
			default: return '&ordering=-score'
		}
	}

	onMount(async () => await getSearchResults($keywords, $pageStore));

	keywords.subscribe(async () => await getSearchResults($keywords, $pageStore))
	availabilityFilter.subscribe(async () => await getSearchResults($keywords, $pageStore))
	ordering.subscribe(async () => await getSearchResults($keywords, $pageStore))
	
</script>
<SearchBar />
{#if !data}
<div class="flex flex-grow">
	<Loading/>
</div>
{:else if 'error' in data}
	<Error/>
{:else if data.count > 0}
	<Filters productsCount={data.count}/>
	<ProductGrid data={data}/>
	<Pagination totalItems={data.count}/>
{:else}
<div class="flex flex-grow">
	<NoResults />
</div>
{/if}
