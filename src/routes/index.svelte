<script>
	import HomeSearchBar from '../compontents/home/HomeSearchBar.svelte';
	import { suggestions } from "../stores/suggestionsStore";
	import { onDestroy, onMount } from 'svelte';
	
	onDestroy(() => suggestions.set([]));
	onMount(() => suggestions.set([]));
</script>
<svelte:head>
	<title>FPV Finder</title>
</svelte:head>
<HomeSearchBar />
