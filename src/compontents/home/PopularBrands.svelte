<script>
	import { variables } from "../../variables";
	import { _ } from "svelte-i18n";
    import { getBestBrands } from "../../api/products";

	import ProductRow from './products/ProductRow.svelte';
</script>

<div class="mx-4 md:mx-auto lg:w-full max-w-6xl items-center my-auto">
	{#await getBestBrands()}
	<span></span>
	{:then data}
	{#if data.count > 0}
        {#each data.results as brand}
			<div class="flex flex-row">
				<h2 class="mx-2 text-2xl md:text-3xl font-bold inline">{brand.name}</h2>
				<a class="text-{variables.mainAccentColor} font-bold inline my-auto" href="search/?q={brand.name}">{$_('see_more')}</a>
			</div>
			<ProductRow products={brand.products}/>
        {/each}
	{/if}
	{/await}
</div>
