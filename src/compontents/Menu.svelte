<script>
    import { _, getLocaleFromNavigator } from 'svelte-i18n';
    export let isOpen;

    const toggleMenu = (e) => {
        e.preventDefault();
        isOpen = !isOpen;
    }

    const supportLinkMap = {
        "en": "support",
        "it": "supporta"
    }
    const getLink = () => {
        const locale = getLocaleFromNavigator();
        if (locale in supportLinkMap) {
            return `${locale}/${supportLinkMap[locale]}`
        }
        return `en/support`
    }
</script>

<div class="hidden md:flex md:flex-row">
    <a href="/most-viewed" class="px-3">{$_('menu_best_products')}</a>
    <a href="/stores" class="px-3">{$_('menu_stores')}</a>
    <a href="{getLink()}" class="px-3">{$_('menu_donate')}</a>
</div>
<div class="md:hidden">
    <button on:click={toggleMenu} class="p-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>
</div>