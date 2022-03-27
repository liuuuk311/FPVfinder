<script>
    import ProductCard from './ProductCard.svelte';

    export let products;
</script>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-8">
	{#each products as product}
		<ProductCard product={product}/>
	{/each}
</div>