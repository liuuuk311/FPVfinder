<script>
    export let title;
    export let subtitle;
</script>
<div class="flex flex-col text-center md:w-1/3 md:px-5">
    <span class="mx-auto mb-3"><slot name="image"/></span>
    <h2 class="text-xl font-bold">{title}</h2>
    <h3 class="text-lg my-3">{subtitle}</h3>
</div>