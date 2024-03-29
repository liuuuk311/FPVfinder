<script>
	import { _ } from 'svelte-i18n';
	import { trackAndOpenLink } from '../../helpers/links';
	import { formatPrice } from '../../helpers/currency.js';
	import ShippingInfo from './ShippingInfo.svelte';
	import { keywords, page } from '../../stores/parametersStore';
	import SuggestShippingMethod from './SuggestShippingMethod.svelte';

	export let product;
	export let shippingMethods;

	let isShippingInfoModalOpen = false;
	let isSuggestShippingModalOpen = false;
	const loadedAt = new Date().getTime();

	const toggleShippingInfoModal = (event) => {
		event.stopPropagation();
		isShippingInfoModalOpen = !isShippingInfoModalOpen;
	};
	const toggleSuggestShippingModal = (event) => {
		event.stopPropagation();
		isSuggestShippingModalOpen = !isSuggestShippingModalOpen;
	};
</script>

{#if isShippingInfoModalOpen}
	<ShippingInfo storeName={product.store.name} info={shippingMethods} {toggleShippingInfoModal} />
{/if}
{#if isSuggestShippingModalOpen}
	<SuggestShippingMethod store={product.store} {toggleSuggestShippingModal}/>
{/if}
<div
	class="bg-gray-50 dark:bg-gray-700 rounded-lg sahdow-lg hover:bg-gray-200 dark:hover:bg-gray-600"
	on:click={() => trackAndOpenLink(product, loadedAt, $keywords, $page)}
>
	<div class="flex flex-col h-full">
		<div class="m-auto px-2 py-2">
			<img
				class="object-center object-cover h-36 lg:h-56 w-36 lg:w-56 bg-white rounded-lg"
				src={product.image}
				alt={product.name}
			     	referrerpolicy="no-referrer" 
			/>
		</div>
		<div class="flex flex-col px-4 md:px-2 pb-2 h-full">
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
			<button
				aria-label="open-{product.name}"
				class="text-left lg:text-md text-sm text-gray-800 dark:text-gray-300 font-bold"
			>
				<p class="">{product.name}</p>
			</button>
			<div class="flex flex-col h-full justify-end">
				
				<!-- Shipping Block -->
				<div class="flex flex-col lg:items-end py-2">
					<p class="lg:text-xl text-lg text-gray-700 dark:text-gray-300 font-bold">
						{formatPrice(product.price, product.currency)}
					</p>
					{#if product.best_shipping_method && product.best_shipping_method.is_free}
						<p
							class="text-xs lg:text-md text-green-500 font-semibold uppercase lg:overflow-ellipsis"
						>
							{$_('free_shipping')}
						</p>
					{:else if product.best_shipping_method}
						<p
							class="text-xs lg:text-md text-gray-600 dark:text-gray-400 font-light lg:overflow-ellipsis"
						>
							{product.best_shipping_method.name}
						</p>
					{:else}
						<p
							class="text-xs lg:text-md text-gray-600 dark:text-gray-400 font-light lg:overflow-ellipsis"
						>
							{$_('shipping_unknown')}
						</p>
					{/if}
					{#if product.best_shipping_method && product.best_shipping_method.is_weight_dependent}
						<p class="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-light">
							{$_('price_weight_dependent')}
						</p>
					{:else}
						<p class="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-light">
							{$_('price')}
							{product.best_shipping_method
								? formatPrice(product.best_shipping_method.price, product.currency)
								: 'N/A'}
						</p>
					{/if}
					{#if product.best_shipping_method && shippingMethods !== undefined}
						<button
							on:click={toggleShippingInfoModal}
							class="my-2 text-gray-600 dark:text-gray-200 font-semibold text-md sm:text-sm font-light hidden md:block"
							>{$_('other_shipping_methods')}</button
						>
					{:else}
						<button
							on:click={toggleSuggestShippingModal}
							class="my-2 text-gray-600 dark:text-gray-200 font-semibold text-md sm:text-sm font-light hidden md:block"
							>{$_('suggest_shipping')}</button
						>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
