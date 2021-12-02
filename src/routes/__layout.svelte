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
  import Header from '../compontents/Header.svelte';

  // note it's ending is .json, while the filename in static/ is  .json.js
  register('en', () => import('../locales/en.json'));
  register('it', () => import('../locales/it.json'));
  // locales are not available yet

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  });

  let dark = false;

</script>
<div class:dark>
  <main class="bg-gray-100 dark:bg-gray-700 dark:text-gray-100 min-h-screen">
    {#if $isLoading}
      <Loading/>
    {:else}
      <Header bind:dark/>
      <slot/>
    {/if}
  </main>
</div>