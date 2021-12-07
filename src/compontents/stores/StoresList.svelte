<script>
    export let stores;
</script>
{#each stores as store}
    <div class="my-3">
        <div class="text-xl">{store.name}</div>
        <div class="text-md text-blue-700 dark:text-blue-300">
            <a href={store.website}>{store.website}</a>
        </div>
    </div>
{/each}