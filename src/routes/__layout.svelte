<script>
	import '../assets/css/tailwind.css'
  import '../assets/css/app.css'

  import {
    register,
    init,
    getLocaleFromNavigator,
    isLoading,
  } from "svelte-i18n";
  import { onDestroy } from 'svelte';

  import { theme } from '../stores/themeStore';
  import Loading from '../compontents/Loading.svelte';
  import Header from '../compontents/Header.svelte';
  import Footer from '../compontents/Footer.svelte'

  // note it's ending is .json, while the filename in static/ is  .json.js
  register('en', () => import('../locales/en.json'));
  register('it', () => import('../locales/it.json'));
  // locales are not available yet

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  });

</script>
<div class={$theme}>
  <main class="bg-gray-100 dark:bg-gray-800 dark:text-gray-100">
    {#if $isLoading}
      <div class="h-screen">
        <Loading/>
      </div>
    {:else}
    <div class="mx-2 md:mx-auto max-w-7xl min-h-screen flex flex-col justify-between">
      <Header/>
      <slot/>
      <Footer/>
    </div>
    {/if}
  </main>
</div>