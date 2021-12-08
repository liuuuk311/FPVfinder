<script>
    import { _ } from 'svelte-i18n'
    import { keywords } from '../../stores/parametersStore.js';
</script>

<div class="md:mx-5 mx-auto my-3">
    <h1 class="text-lg text-center md:text-left md:text-xl">{$_("no_results_title")} <strong>{$keywords}</strong></h1>
</div>