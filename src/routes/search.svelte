<script context="module">
	import { countryFilter, keywords, page as pageStore } from "../stores/parametersStore";
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({url}) {
		const queryParam = url.searchParams.get('q');
		const pageParam = url.searchParams.get('page') !== null ? url.searchParams.get('page') : 1
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
	import { availabilityFilter, continentFilter, updatedFilters, ordering } from "../stores/parametersStore";
	

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
		const url = `${variables.apiURL}/api/v1/products/?search=${query}&page=${page}${getIsAvailable()}${getContinent()}${getCountry()}${getOrdering()}`;
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

	function getContinent() {
		if ($countryFilter !== undefined && $countryFilter !== "any") return ""
		if ($continentFilter === undefined || $continentFilter === "any") return ""
		return `&continent=${$continentFilter}`
	}

	function getCountry() {
		if ($countryFilter === undefined || $countryFilter === "any") return ""
		return `&country=${$countryFilter}`
	}

	onMount(async () => await getSearchResults($keywords, $pageStore));

	keywords.subscribe(async () => await getSearchResults($keywords, $pageStore))
	updatedFilters.subscribe(async () => await getSearchResults($keywords, $pageStore))
	ordering.subscribe(async () => await getSearchResults($keywords, $pageStore))
	pageStore.subscribe(async () => await getSearchResults($keywords, $pageStore))
	
</script>
<svelte:head>
	<title>FPV Finder: {$keywords}</title>
</svelte:head>
<SearchBar />
<Filters />
{#if !data}
<div class="flex flex-grow">
	<Loading/>
</div>
{:else if 'error' in data}
	<Error/>
{:else if data.count > 0}
	<ProductGrid data={data}/>
	<Pagination totalItems={data.count}/>
{:else}
<div class="flex flex-grow">
	<NoResults />
</div>
{/if}
