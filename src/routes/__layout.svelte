<script context="module">
  import '../i18n'
  import { waitLocale } from 'svelte-i18n'

  export async function preload() {
    // awaits for the loading of the 'en-US' and 'en' dictionaries
    return waitLocale()
  }
</script>
<script>
	import '../assets/css/tailwind.css'
  import '../assets/css/app.css'

</script>

<slot />

