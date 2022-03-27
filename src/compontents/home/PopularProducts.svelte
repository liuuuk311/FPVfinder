<script>
	import { _ } from "svelte-i18n";
    import { getBestProducts } from "../../api/products";

	import ProductRow from './products/ProductRow.svelte';

</script>

<div class="mx-4 md:mx-auto lg:w-full max-w-6xl items-center my-auto">
	{#await getBestProducts()}
	<span></span>
	{:then data}
	{#if data.count > 0}
	<div class="my-8">
		<h2 class="mx-2 text-2xl md:text-3xl font-bold">{$_('most_clicked_title')}</h2>
		<ProductRow products={data.results}/>
	</div>
	{/if}
	{/await}
</div>
