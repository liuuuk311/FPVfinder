<script>
	import { _, getLocaleFromNavigator } from 'svelte-i18n'
	import HomeSearchBar from '../compontents/home/HomeSearchBar.svelte';
	import { suggestions } from "../stores/suggestionsStore";
	import { onDestroy, onMount } from 'svelte';
	import PopularProducts from '../compontents/home/PopularProducts.svelte';
	import PopularBrands from '../compontents/home/PopularBrands.svelte';
	import SeoContent from '../compontents/home/SeoContent.svelte';
	import SEO from '../compontents/SEO.svelte';
	
	onDestroy(() => suggestions.set([]));
	onMount(() => suggestions.set([]));
</script>
<SEO title={$_('seo_home_title')} metadescription={$_('seo_home_meta_description')} language={getLocaleFromNavigator()}/>
<HomeSearchBar />
<PopularProducts />
<PopularBrands />
<SeoContent />