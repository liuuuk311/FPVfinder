<script>
	import { _ } from 'svelte-i18n';
	import { keywords, page } from '../../stores/parametersStore';
	import { variables } from '../../variables';
	import { formatPrice } from '../../helpers/currency.js';
	import ShippingInfo from './ShippingInfo.svelte';
	import Tooltip from './Tooltip.svelte';

	export let product;
	export let shippingMethods;

	let isModalOpen = false;
	const loadedAt = new Date().getTime();

	const toggleModal = (event) => {
		isModalOpen = !isModalOpen;
	};

	async function trackAndOpenLink(product) {
		window.open(product.link, '_blank').focus();
		await fetch(`${variables.apiURL}/api/v1/products/${product.id}/click/`, {
			method: 'POST',
			body: JSON.stringify({
				clicked_after_seconds: (new Date().getTime() - loadedAt) / 1000,
				search_query: $keywords,
				page: $page
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
</script>

{#if isModalOpen}
	<ShippingInfo storeName={product.store.name} info={shippingMethods} {toggleModal} />
{/if}
<div class="bg-white dark:bg-gray-700 rounded-lg sahdow-lg">
	<div class="flex flex-col h-full">
		<div on:click={() => trackAndOpenLink(product)} class="m-auto px-2 py-2">
			<img
				class="object-center object-cover h-36 lg:h-56 w-36 lg:w-56 bg-white rounded-lg"
				src={product.image}
				alt={product.name}
			/>
		</div>
		<div class="flex flex-col px-3 pb-2 h-full">
			{#if product.name !== product.display_name}
			<Tooltip text={product.name}>
				<button
					class="text-left lg:text-lg text-sm text-gray-800 dark:text-gray-300 font-semibold"
					on:click={() => trackAndOpenLink(product)}>
					<p class="overflow-ellipsis">{product.display_name}</p>
				</button>
			</Tooltip>
			{:else}
				<button
					class="text-left lg:text-lg text-sm text-gray-800 dark:text-gray-300 font-semibold"
					on:click={() => trackAndOpenLink(product)}>
					<p class="overflow-ellipsis">{product.display_name}</p>
				</button>
			{/if}
			<div class="flex flex-col h-full justify-end">
				<div>
					<p class="md:text-base text-gray-400 font-normal text-xs">{product.store.name}</p>
					{#if product.is_available == null}
						<span class="bg-yellow-500 rounded-full inline-block h-2 w-2" />
						<p class="mx-1 inline-block md:text-md text-gray-400 font-normal text-xs">
							{$_('stock_unknown')}
						</p>
					{:else}
						<span
							class="{product.is_available
								? 'bg-green-500'
								: 'bg-red-500'} rounded-full inline-block h-2 w-2"
						/>
						<p class="mx-1 inline-block md:text-md text-gray-400 font-normal text-xs">
							{product.is_available ? $_('in_stock') : $_('out_of_stock')}
						</p>
					{/if}
				
				</div>
				<div class="flex flex-col lg:items-end py-2">
					<p class="lg:text-2xl text-lg text-gray-700 dark:text-gray-300 font-bold">
						{formatPrice(product.price, product.currency)}
					</p>
					{#if product.best_shipping_method && product.best_shipping_method.is_free}
						<p
							class="text-xs lg:text-md text-green-500 font-semibold uppercase lg:overflow-ellipsis"
						>
							{$_('free_shipping')}
						</p>
					{:else}
						<p
							class="text-xs lg:text-md text-gray-600 dark:text-gray-400 font-thin lg:overflow-ellipsis"
						>
							{product.best_shipping_method
								? product.best_shipping_method.name
								: $_('shipping_unknown')}
						</p>
					{/if}
					{#if product.best_shipping_method && product.best_shipping_method.is_free}
						<p class="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-thin">
							{$_('price')} {formatPrice(0, product.currency)}
						</p>
					{:else}
						<p class="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-thin">
							{$_('price')}
							{product.best_shipping_method
								? formatPrice(product.best_shipping_method.price, product.currency)
								: 'N/A'}
						</p>
					{/if}
					<button
						on:click={toggleModal}
						class="my-2 text-gray-600 dark:text-gray-200 text-md sm:text-sm font-light hidden md:block"
						>{$_('other_shipping_methods')}</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
