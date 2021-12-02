<script>
    import { variables } from '../variables';
    import ThemeSwitcher from "./ThemeSwitcher.svelte";
    import Menu from "./Menu.svelte";

    export let dark;
</script>

<div class="dark:bg-gray-800 bg-gray-100">
    <div class="p-2 my-2 flex flex-row justify-between items-center">
        <a href="/" class="hidden md:inline-block">
            <span class="text-3xl font-bold text-white-700 md:text-lg md:w-32">
                {variables.websiteName}
            </span>
        </a>
        <div class="flex flex-row flex-grow justify-between md:justify-end items-center">
            <Menu />
            <a href="/" class="md:hidden">
                <span class="text-2xl font-bold text-white-700">
                    {variables.websiteName}
                </span>
            </a>
            <ThemeSwitcher bind:dark/>
        </div>
    </div>
</div>