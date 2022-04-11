<script>
    import { variables } from '../../variables';
    import { _ } from 'svelte-i18n';
	import { clickOutside } from '../../helpers/clickOutside';
    import { createShippingMethodSuggestion } from '../../api/shipping';
	export let toggleSuggestShippingModal;
    export let store;


    let shippingMethod = {
        name: undefined,
        isFree: false,
        price: NaN,
        minPriceShippingCondition: NaN,
        isWeightDependent: false
    }

    let shippingType = "standard";

    const suggestShippingMethod = async (e) => {
        e.preventDefault()
        await createShippingMethodSuggestion(store.id, shippingMethod);
        toggleSuggestShippingModal(e)
    }

    const setShippingType = () => {
        if (shippingType === "standard") {
            shippingMethod.isFree = false
            shippingMethod.isWeightDependent = false
            shippingMethod.price = NaN
        }
        if (shippingType === "free") {
            shippingMethod.isFree = true
            shippingMethod.isWeightDependent = false
            shippingMethod.price = NaN
        }
        if (shippingType === "weight") {
            shippingMethod.isFree = false
            shippingMethod.isWeightDependent = true
            shippingMethod.price = NaN
        }
    }
</script>

<div
	x-show="showModal"
	class="fixed flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0"
	x-transition:enter="transition ease duration-300"
	x-transition:enter-start="opacity-0"
	x-transition:enter-end="opacity-100"
	x-transition:leave="transition ease duration-300"
	x-transition:leave-start="opacity-100"
	x-transition:leave-end="opacity-0"
>
	<!-- Modal -->
	<div
		use:clickOutside
		on:click_outside={toggleSuggestShippingModal}
		x-show="showModal"
		class="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-2xl p-6 w-1/2 mx-10"
		x-transition:enter="transition ease duration-100 transform"
		x-transition:enter-start="opacity-0 scale-90 translate-y-1"
		x-transition:enter-end="opacity-100 scale-100 translate-y-0"
		x-transition:leave="transition ease duration-100 transform"
		x-transition:leave-start="opacity-100 scale-100 translate-y-0"
		x-transition:leave-end="opacity-0 scale-90 translate-y-1"
	>
		<span class="font-bold block text-3xl mb-3 dark:text-gray-200"
			>{$_('shipping_suggestion_modal_title')} {store.name}
		</span>
        <form on:submit={suggestShippingMethod}>
        <div class="flex flex-row">
            <div class="w-1/2">
                <h2 class="text-xl font-semibold">{$_('shipping_suggestion_modal_subtitle')}</h2>
                <p class="my-4">{@html $_('shipping_suggestion_modal_content')}</p>
            </div>
            <div class="w-1/2 pl-16 justify-end">  
               
                <div class="bg-white dark:bg-gray-600 rounded-full px-4 my-4">
                    <input 
                        type="text" required
                        class="appearance-none border-none focus:border-none text-sm md:text-base text-gray-400 bg-white dark:bg-gray-600 dark:text-gray-100 outline-none py-3 mx-2 w-11/12" 
                        placeholder={$_('shipping_suggestion_modal_name')} 
                        bind:value={shippingMethod.name}/>
                </div>
                {#if !shippingMethod.isFree && !shippingMethod.isWeightDependent}
                <div class="bg-white dark:bg-gray-600 rounded-full px-4 my-4">
                    <input 
                        type="number" min="1" step="any" required
                        class="appearance-none border-none focus:border-none text-sm md:text-base text-gray-400 bg-white dark:bg-gray-600 dark:text-gray-100 outline-none py-3 mx-2 w-11/12" 
                        placeholder={$_('shipping_suggestion_modal_price')} 
                        bind:value={shippingMethod.price}/>
                </div>
                {:else if shippingMethod.isFree && !shippingMethod.isWeightDependent}
                <div class="bg-white dark:bg-gray-600 rounded-full px-4 my-4">
                    <input 
                        type="number" min="1" step="any" required
                        class="appearance-none border-none focus:border-none text-sm md:text-base text-gray-400 bg-white dark:bg-gray-600 dark:text-gray-100 outline-none py-3 mx-2 w-11/12" 
                        placeholder={$_('shipping_suggestion_modal_min_price')} 
                        bind:value={shippingMethod.minPriceShippingCondition}/>
                </div>
                {:else}
                    <span></span>
                {/if}
                <div class="flex flex-col">
                    <label class="form-check-label inline-block">
                        <input 
                        class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-     checked:border-{variables.mainAccentColor} focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type=radio bind:group={shippingType} value="standard" on:change={setShippingType}>
                        {$_('shipping_suggestion_modal_choice_standard')}
                    </label>

                    <label>
                        <input 
                        class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-{variables.mainAccentColor} checked:border-{variables.mainAccentColor} focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type=radio bind:group={shippingType} value="free" on:change={setShippingType}>
                        {$_('shipping_suggestion_modal_choice_free')}
                    </label>
                    
                    <label>
                        <input 
                        class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-{variables.mainAccentColor} checked:border-{variables.mainAccentColor} focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type=radio bind:group={shippingType} value="weight" on:change={setShippingType}>
                        {$_('shipping_suggestion_modal_choice_weight')}
                    </label> 
                </div>
                  
            </div>
        </div>
        
        <div class="text-right space-x-3 mt-5">
            <button on:click={toggleSuggestShippingModal} class="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-full">{$_('close')}</button>
            <button type="submit" class="px-4 py-2 text-sm bg-{variables.mainAccentColor} font-bold rounded-full">{$_('suggestion_btn')}</button>
        </div>
    </form>
	</div>
</div>
