<script>
    import { _ } from 'svelte-i18n';
    import { cookie } from '../stores/preferences';
    import { variables } from '../variables';
</script>

{#if $cookie}
<div class="fixed bottom-0 left-0 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 w-full rounded-t-xl">
    <div class="flex flex-row h-full justify-between m-2 p-2 md:p-0 items-center md:mx-auto max-w-7xl">
        <p class="text-sm">{$_('cookie_msg_1')} {variables.websiteName}, {$_('cookie_msg_2')} <a href="/privacy" target="_blank">Privacy Policy</a>, {$_('cookie_msg_3')}.</p>
        <button on:click={() => cookie.set(false)} class="">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
</div>
{/if}