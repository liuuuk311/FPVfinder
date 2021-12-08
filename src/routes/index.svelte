<script>
	import HomeSearchBar from '../compontents/home/HomeSearchBar.svelte';
	import { suggestions } from "../stores/suggestionsStore";
	import { onDestroy } from 'svelte';
	
	onDestroy(() => suggestions.set([]));
</script>

<HomeSearchBar />
