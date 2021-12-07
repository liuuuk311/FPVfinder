<script>
    import { _ } from 'svelte-i18n';
    import { variables } from '../../variables';

    let suggestedUrl;
    let suggestionDone = false;

    const toggleThanksMessage = () => suggestionDone = !suggestionDone;

    async function postSuggestion(e){
        e.preventDefault();
        await fetch(`${variables.apiURL}/api/v1/stores/suggest/`, {
			method: 'POST',
			body: JSON.stringify({
                website: suggestedUrl,
			}),
            headers: {
				'Content-Type': 'application/json',
			}
		})
        suggestedUrl = "";
        toggleThanksMessage();
        setTimeout(toggleThanksMessage, 2500);
    }
</script>
<div class="mx-auto mt-10">
    <h3 class="text-3xl font-semibold lg:text-center">{$_("suggest_new_store")}</h3>
    {#if suggestionDone}
        <div class="dark:text-green-300 text-green-500 flex flex-row justify-center">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            </span>
            <span class="text-base lg:text-center">{$_("suggestion_thank_you")}</span>
        </div>
    {:else}
        <p class="text-base lg:text-center">{$_("suggestion_msg")} {variables.websiteName}</p>
    {/if}
    <form 
        class="my-5 flex flex-row items-center bg-white dark:bg-gray-600 dark:text-gray-100 rounded-full overflow-hidden justify-between"
        on:submit={postSuggestion}>
        <div>
            <input
                class="appearance-none rounded-full w-full py-2 px-3 bg-white dark:bg-gray-600 dark:text-gray-100  focus:outline-none"
                type="url"
                pattern="https://.*"
                placeholder={$_("suggestion_url_placeholder")}
                size="40"
                bind:value={suggestedUrl}
                required
            />
        </div>
        <div class="flex items-center justify-between">
            <button
                class="bg-{variables.mainAccentColor} text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
            >
                {$_("suggestion_btn")}
            </button>
        </div>
    </form>
</div>