<script>
    import { _ } from 'svelte-i18n';
    import { clickOutside } from '../../helpers/clickOutside';
    import { availabilityFilter } from '../../stores/parametersStore';

    export let toggleModal;
    let selectedAvailability = $availabilityFilter || 1;

    let availabilityFilters = [
        {id: 1, text: $_('filter_availability_all')},
        {id: 2, text: $_('filter_availability_in_stock')},
        {id: 3, text: $_('filter_availability_out_stock')},
    ]

    function setAvailabilityFilter() {
        availabilityFilter.set(selectedAvailability);
    }
    
    function setFiltersAndCloseModal() {
        setAvailabilityFilter()
        toggleModal()
    }

</script>
<div x-show="showModal" class="fixed flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0" x-transition:enter="transition ease duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition ease duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
    <!-- Modal -->
    <div use:clickOutside on:click_outside={setFiltersAndCloseModal} x-show="showModal" class="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-2xl p-6 w-4/5 md:w-1/2 mx-10" x-transition:enter="transition ease duration-100 transform" x-transition:enter-start="opacity-0 scale-90 translate-y-1" x-transition:enter-end="opacity-100 scale-100 translate-y-0" x-transition:leave="transition ease duration-100 transform" x-transition:leave-start="opacity-100 scale-100 translate-y-0" x-transition:leave-end="opacity-0 scale-90 translate-y-1">
        <h1 class="text-2xl text-bold my-3 dark:text-gray-200">{$_('filter_title')}</h1>
        <div class="flex flex-col md:flex-row md:items-center">
            <label for="availability" class="text-lg mr-3 dark:text-gray-400">{$_('filter_availability_label')}</label>
            <div class="">
                <div class="relative">
                    <select 
                        id="availability"
                        bind:value={selectedAvailability}
                        class="appearance-none w-full bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-300 p-2 px-3 pr-6 rounded-full"
                        >
                        {#each availabilityFilters as choice}
                            <option value={choice.id}>
                                {choice.text}
                            </option>
                        {/each}
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                </div>
            </div>
        </div>
        <!-- Buttons -->
        <div class="text-right space-x-5 mt-5">
            <button on:click={setFiltersAndCloseModal} class="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none font-bold">
                {$_('close')}
            </button>
        </div>
    </div>
</div>
