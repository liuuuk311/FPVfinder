<script>
	import { variables } from '../../variables';
    export let onclickCTA;
    export let title;
    export let subtitle;
    export let subtitleBold;
    export let cta;

</script>

<div class="mx-4 md:mx-0 flex flex-col md:flex-row md:justify-around" style="height: 80vh;">
    <div class="flex flex-col md:hidden">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            class="h-full w-5/6 mx-auto my-8">
            <slot name="svg" />
        </svg>
    </div>
    <div class="flex flex-col md:w-3/5 md:my-auto">
        <h1 class="text-3xl md:text-6xl font-bold md:my-8 mb-4">{title}</h1>
        <h3 class="text-xl my-3">
            {subtitle}<span class="font-bold">{subtitleBold}</span>
        </h3>
        <a
            href="#donate"
            on:click|preventDefault={onclickCTA}
            class="bg-{variables.mainAccentColor} mt-3 text-white text-lg rounded-full py-3 px-5 font-bold md:w-1/3 uppercase text-center"
            >{cta}</a
        >
    </div>
    <div class="flex flex-col hidden md:block w-2/5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" class="h-full w-full mx-auto my-auto">
            <slot name="svg" />
        </svg>
    </div>
</div>