<script>
import SuggestionForm from '../compontents/stores/SuggestionForm.svelte';
import StoresGrid from '../compontents/stores/StoresGrid.svelte';
import Stats from '../compontents/stores/Stats.svelte';
import { _, getLocaleFromNavigator } from 'svelte-i18n';
import SEO from '../compontents/SEO.svelte';
</script>
<SEO title={$_('menu_stores')} metadescription={$_('seo_home_meta_description')} language={getLocaleFromNavigator()}/>
<div class="mx-4 md:mx-0 flex flex-col">
    <Stats />
    <StoresGrid />
    <SuggestionForm />
</div>

