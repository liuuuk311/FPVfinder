<script>
    import { _ } from 'svelte-i18n';
    export let isOpen;

    const toggleMenu = () => {
        isOpen = !isOpen;
    } 
</script>
<div on:click={toggleMenu} class="transform top-0 left-0 w-full bg-black opacity-40 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-20 {isOpen ? 'translate-x-0' : '-translate-x-full hidden'}">
</div>
<aside class="transform top-0 left-0 w-64 bg-white dark:bg-gray-900 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 {isOpen ? 'translate-x-0' : '-translate-x-full'}">
    <div class="p-2 px-3 mt-10">
        <div class="flex flex-col my-5">
            <div class="my-3">
                <a href="/" class="flex flex-row">
                    <span class="w-1/4 px-2 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    </span>
                    <span class="text-xl font-light text-gray-600 dark:text-gray-400">
                        {$_('menu_best_products')}
                    </span>
                </a>
            </div>
            <div class="my-3">
                <a href="/stores" class="flex flex-row">
                    <span class="w-1/4 px-2 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </span>
                    <span class="text-xl font-light text-gray-600 dark:text-gray-400">
                        {$_('menu_stores')}
                    </span>
                </a>
            </div>
            <div class="my-3">
                <a href="/" class="flex flex-row">
                    <span class="w-1/4 px-2 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                    </span>
                    <span class="text-xl font-light text-gray-600 dark:text-gray-400">
                        {$_('menu_donate')}
                    </span>
                </a>
            </div>
        </div>
    </div>
</aside>