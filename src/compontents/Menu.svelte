<script>
    export let isOpen;

    const toggleMenu = (e) => {
        e.preventDefault();
        isOpen = !isOpen;
    } 
</script>

<div class="hidden md:flex md:flex-row">
    <a href="/" class="px-3">Best products</a>
    <a href="/" class="px-3">Stores</a>
    <a href="/" class="px-3">Donate</a>
</div>
<div class="md:hidden">
    <button on:click={toggleMenu} class="p-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>
</div>