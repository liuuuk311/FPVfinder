<script>
    import CopyToClipboard from "svelte-copy-to-clipboard";
    export let text;
    export let value;
    export let textOnSuccess;

    let showSuccess = false;

    const handleSuccessfullyCopied = (e) => {
        showSuccess = true;
    }
</script>
<div class="w-full h-12 flex flex-col">
    <CopyToClipboard text={value} on:copy={handleSuccessfullyCopied} let:copy>
        <button class="bg-gray-700 text-white dark:bg-gray-300 dark:text-black text-sm rounded-lg py-4 px-3 font-bold" on:click={copy}>{text}</button>
    </CopyToClipboard>
    {#if textOnSuccess && showSuccess}
        <span class="text-sm font-bold text-green-500 text-center">{textOnSuccess}</span>
    {/if}
</div>
