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
    <div class="p-2 px-7 mt-10">
        <div class="flex flex-col my-5">
            <div class="my-3">
                <a href="/" class="flex flex-row" on:click={toggleMenu}>
                    <span class="w-1/4 px-2 text-gray-500 my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </span>
                    <span class="text-2xl font-light text-gray-600 dark:text-gray-400">
                        {$_('menu_home')}
                    </span>
                </a>
            </div>
            <!-- <div class="my-3">
                <a href="/most-viewed" class="flex flex-row" on:click={toggleMenu}>
                    <span class="w-1/4 px-2 text-gray-500 my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </span>
                    <span class="text-2xl font-light text-gray-600 dark:text-gray-400">
                        {$_('menu_best_products')}
                    </span>
                </a>
            </div> -->
            <div class="my-3">
                <a href="/stores" class="flex flex-row" on:click={toggleMenu}>
                    <span class="w-1/4 px-2 text-gray-500 my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </span>
                    <span class="text-2xl font-light text-gray-600 dark:text-gray-400">
                        {$_('menu_stores')}
                    </span>
                </a>
            </div>
        </div>
    </div>
</aside>