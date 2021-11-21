<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	import { _ } from 'svelte-i18n'
	import Header from "../compontents/Header.svelte"
    import Footer from '../compontents/Footer.svelte'
</script>

<Header/>
<div class="flex flex-col items-center">
	<h1 class="text-xl">{$_("error_msg")}</h1>
	<a href="/" class="text-xl text-indigo-500">{$_("return_home")}</a>
</div>
<div class="fixed bottom-0 left-0 w-full">
    <Footer/>
</div>