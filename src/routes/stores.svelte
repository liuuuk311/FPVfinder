<script>
import SuggestionForm from '../compontents/stores/SuggestionForm.svelte';
import StoresGrid from '../compontents/stores/StoresGrid.svelte';
import Stats from '../compontents/stores/Stats.svelte';
import { _ } from 'svelte-i18n';
</script>
<svelte:head>
	<title>{$_('menu_stores')}</title>
</svelte:head>
<div class="mx-4 md:mx-0 flex flex-col">
    <Stats />
    <StoresGrid />
    <SuggestionForm />
</div>

