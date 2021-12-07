<script>
	import { _ } from 'svelte-i18n';
	import { variables } from '../variables';
</script>

<div class="flex flex-col items-center -mt-32">
	<h1 class="text-gray-700 dark:text-gray-200">404</h1>
	<h2 class="text-xl">{$_("error_msg")}</h2>
	<a href="/" class="text-xl text-{variables.mainAccentColor}">{$_("return_home")}</a>
</div>
<style>
	h1 {
		margin: 100px auto 0 auto;
		font-size: 10rem; line-height: 10rem;
		font-weight: 200;
		text-align: center;
	}
</style>