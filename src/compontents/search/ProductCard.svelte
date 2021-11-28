<script>
    import { _ } from 'svelte-i18n'
    import ShippingInfo from "./ShippingInfo.svelte"
    import { formatPrice } from "../../helpers/currency.js"
	export let product;
    export let shippingMethods;

    let isModalOpen = false;

    const toggleModal = (event) => {
        isModalOpen = !isModalOpen;
    }
</script>
{#if isModalOpen}
  <ShippingInfo storeName={product.store.name} info={shippingMethods} toggleModal={toggleModal}/>
{/if}
<div class="bg-white rounded-lg sahdow-lg">
    <div class="flex flex-col">
        <div class="m-auto p-2">
            <img
                class="object-center object-contain"
                src={product.image}
                alt={product.name}
            />
        </div>
        <div class="text-left p-4">
            <p class="lg:text-xl text-sm text-indigo-600 font-normal truncate"><a href={product.link} target="_blank" rel="nofollow">{product.name}</a></p>
            {#if product.is_available == null}
                <span class="bg-yellow-500 rounded-full inline-block h-2 w-2"></span>
                <p class="mx-1 inline-block md:text-base text-gray-400 font-normal text-xs">{$_('stock_unknown')}</p>
            {:else}
                <span class="{product.is_available ? 'bg-green-500' : 'bg-red-500'} rounded-full inline-block h-2 w-2"></span>
                <p class="mx-1 inline-block md:text-base text-gray-400 font-normal text-xs">{product.is_available ? $_('in_stock') : $_('out_of_stock')}</p>
            {/if}
            <p class="md:text-base text-gray-400 font-normal text-xs">{product.store.name}</p>
        </div>
        <div class="flex flex-col justify-start p-4 pt-0 md:pt-4 lg:items-end">
            <p class="lg:text-2xl text-xl text-gray-700 font-bold">{formatPrice(product.price, product.currency)}</p>
            <p class="text-sm lg:text-md text-gray-600 font-thin lg:overflow-ellipsis">{product.store.best_shipping_method.name}</p>
            {#if product.store.best_shipping_method.is_free }
                <p class="text-xs lg:text-sm text-gray-600 font-thin">{$_('free_shipping_condition')} {formatPrice(product.store.best_shipping_method.min_price_free_shipping, product.currency)}</p>
            {:else}
                <p class="text-xs lg:text-sm text-gray-600 font-thin">{$_('price')} {formatPrice(product.store.best_shipping_method.price, product.currency)}</p>
            {/if}
            <button on:click={toggleModal} class="my-2 text-indigo-500 text-md sm:text-sm font-light hidden md:block">{$_('other_shipping_methods')}</button>
        </div>
    </div>
</div>


