<script>
	import { _ } from 'svelte-i18n';
    import { trackAndOpenLink } from '../../../helpers/links';
	import { formatPrice } from '../../../helpers/currency.js';
	import { keywords, page } from '../../../stores/parametersStore';

	export let product;
	const loadedAt = new Date().getTime();
</script>

<div class="rounded-lg sahdow-lg hover:bg-gray-200 dark:hover:bg-gray-600 lg:w-48 " on:click={() => trackAndOpenLink(product, loadedAt, $keywords, $page)}>
	<div class="flex flex-col h-full">
		<div class="m-auto px-1 py-2">
			<img
				class="object-center object-cover h-36 lg:h-48 w-36 lg:w-48 bg-white rounded-lg"
				src={product.image}
				alt={product.name}
			/>
		</div>
		<div class="flex flex-col px-4 md:px-1 pb-2 h-full">
			<button aria-label="open-{product.name}"
				class="text-left lg:text-md text-sm text-gray-800 dark:text-gray-300 font-bold">
				<p class="">{product.name}</p>
			</button>
			<div class="flex flex-col h-full justify-end">
				<div class="flex md:flex-row flex-col my-1">
					<p class="text-xs text-gray-400 font-semibold">{product.store.name}</p>
					<div class="flex">
					{#if product.is_available == null}
						<span class="bg-yellow-500 rounded-full inline-block h-3 w-3 my-auto md:ml-2" />
						<p class="mx-1 inline-block my-auto text-gray-400 font-normal text-xs ">
							{$_('stock_unknown')}
						</p>
					{:else}
						<span
							class="{product.is_available
								? 'bg-green-500'
								: 'bg-red-500'} rounded-full inline-block h-3 w-3 my-auto md:ml-2"
						/>
						<p class="mx-1 inline-block my-auto text-gray-400 font-normal text-xs">
							{product.is_available ? $_('in_stock') : $_('out_of_stock')}
						</p>
					{/if}
				</div>
				</div>
				<div class="flex flex-col lg:items-end py-2">
					<p class="lg:text-xl text-lg text-gray-700 dark:text-gray-300 font-bold">
						{formatPrice(product.price, product.currency)}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
