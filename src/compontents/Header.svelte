<script>
    import ThemeSwitcher from "./ThemeSwitcher.svelte";
    import Menu from "./Menu.svelte";

    export let dark;
</script>

<div class="dark:bg-gray-700 bg-gray-100">
    <div class="mx-auto max-w-7xl p-2 flex flex-row justify-between items-center">
        <a href="/" class="hidden md:inline-block">
            <span class="text-3xl font-bold text-white-700 md:text-lg md:w-32">
                FPV Finder
            </span>
        </a>
        <div class="mx-auto flex flex-row flex-grow justify-between md:justify-end items-center">
            <Menu />
            <a href="/" class="md:hidden">
                <span class="text-2xl font-bold text-white-700">
                    FPV Finder
                </span>
            </a>
            <ThemeSwitcher bind:dark/>
        </div>
    </div>
</div>