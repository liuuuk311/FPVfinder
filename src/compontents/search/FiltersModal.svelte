<script>
    import { _ } from 'svelte-i18n';
    import { clickOutside } from '../../helpers/clickOutsite';

    export let toggleModal;
</script>
<div x-show="showModal" class="fixed text-gray-500 flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0" x-transition:enter="transition ease duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition ease duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
    <!-- Modal -->
    <div use:clickOutside on:click_outside={toggleModal} x-show="showModal" class="bg-white rounded-xl shadow-2xl p-6 w-4/5 mx-10" x-transition:enter="transition ease duration-100 transform" x-transition:enter-start="opacity-0 scale-90 translate-y-1" x-transition:enter-end="opacity-100 scale-100 translate-y-0" x-transition:leave="transition ease duration-100 transform" x-transition:leave-start="opacity-100 scale-100 translate-y-0" x-transition:leave-end="opacity-0 scale-90 translate-y-1">
        <h1 class="text-2xl text-bold">{$_('filter_title')}</h1>
        <div class="flex flex-col">
            <label class="inline-flex items-center mt-5">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-500 form-input" checked>
                <span class="ml-2 text-gray-700">{$_('filter_show_out_of_stock')}</span>
            </label>
        </div>
        <!-- Buttons -->
        <div class="text-right space-x-5 mt-5">
            <button on:click={toggleModal} class="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo">
                {$_('close')}
            </button>
        </div>
    </div>
</div>
