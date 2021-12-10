<script>
	import MostClicked from '../compontents/mostViewed/MostClicked.svelte';
	import { _ } from 'svelte-i18n';
</script>
<svelte:head>
	<title>{$_('menu_best_products')}</title>
</svelte:head>
<div class="mb-3">
	<MostClicked/>
</div>
