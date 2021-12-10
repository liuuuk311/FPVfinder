<script>
    import { _ } from 'svelte-i18n'
    import { clickOutside } from '../../helpers/clickOutside';
    import { formatPrice } from "../../helpers/currency.js";

    export let toggleModal;
    export let storeName;
    export let info;

</script>
<!-- Modal Background -->
<div x-show="showModal" class="fixed flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0" x-transition:enter="transition ease duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition ease duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
    <!-- Modal -->
    <div use:clickOutside on:click_outside={toggleModal} x-show="showModal" class="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-2xl p-6 w-1/2 mx-10" x-transition:enter="transition ease duration-100 transform" x-transition:enter-start="opacity-0 scale-90 translate-y-1" x-transition:enter-end="opacity-100 scale-100 translate-y-0" x-transition:leave="transition ease duration-100 transform" x-transition:leave-start="opacity-100 scale-100 translate-y-0" x-transition:leave-end="opacity-0 scale-90 translate-y-1">
        <!-- Title -->
        <span class="font-bold block text-2xl mb-3 dark:text-gray-200">{$_('other_shipping_methods')} - {storeName}</span>
        
        <div class="block w-full overflow-x-auto">
            <table class="items-center bg-transparent w-full border-collapse ">
                <thead>
                    <tr>
                        <th
                            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            {$_('name')}
                        </th>
                        <th
                            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            {$_('shipping_time')}
                        </th>
                        <th
                            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            {$_('price')}
                        </th>
                    </tr>
                </thead>
        
                <tbody>
                    {#each info as i}
                    <tr>
                        <th
                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {i.name}
                            {#if i.is_free}
                                - {$_('free_shipping_condition')} {formatPrice(i.min_price_shipping_condition, i.currency)}
                            {/if}
                            
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                            {i.min_shipping_time} {i.min_shipping_time === 1 ? $_('day') : $_('days')}
                        </td>
                        <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {i.is_free ? formatPrice(0, i.currency) : formatPrice(i.price, i.currency)}
                        </td>
                    </tr>
                    {/each}
                </tbody>
        
            </table>


        </div>
        <!-- Buttons -->
        <div class="text-right space-x-5 mt-5">
            <button on:click={toggleModal} class="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full">{$_('close')}</button>
        </div>
    </div>
</div>

