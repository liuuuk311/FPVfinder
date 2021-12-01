<script context="module">
  // import '../i18n'
  // import { waitLocale } from 'svelte-i18n'

  // export async function preload() {
  //   // awaits for the loading of the 'en-US' and 'en' dictionaries
  //   return waitLocale()
  // }
</script>
<script>
	import '../assets/css/tailwind.css'
  import '../assets/css/app.css'

  import {
    register,
    init,
    getLocaleFromNavigator,
    isLoading,
  } from "svelte-i18n";
import Loading from '../compontents/Loading.svelte';

  // note it's ending is .json, while the filename in static/ is  .json.js
  register('en', () => import('../locales/en.json'));
  register('it', () => import('../locales/it.json'));
  // locales are not available yet

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  });


</script>

{#if $isLoading}
<Loading/>
{:else}
  <slot />
{/if}
