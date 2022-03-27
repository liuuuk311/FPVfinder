<script>
	import HomeSearchBar from '../compontents/home/HomeSearchBar.svelte';
	import { suggestions } from "../stores/suggestionsStore";
	import { onDestroy, onMount } from 'svelte';
	import PopularProducts from '../compontents/home/PopularProducts.svelte';
	import PopularBrands from '../compontents/home/PopularBrands.svelte';
	
	onDestroy(() => suggestions.set([]));
	onMount(() => suggestions.set([]));
</script>
<svelte:head>
	<title>FPV Finder</title>
</svelte:head>
<HomeSearchBar />
<PopularProducts />
<PopularBrands />