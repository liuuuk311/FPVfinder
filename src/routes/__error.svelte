<script>
	import { _ } from 'svelte-i18n';
	import { variables } from '../variables';
</script>

<div class="flex flex-col items-center">
	<h1 class="text-xl">{$_("error_msg")}</h1>
	<a href="/" class="text-xl text-{variables.mainAccentColor}">{$_("return_home")}</a>
</div>