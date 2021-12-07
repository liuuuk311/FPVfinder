<script>
    import { _ } from 'svelte-i18n';
    import { variables } from '../../variables';
    async function getStats() {
        const res = await fetch(`${variables.apiURL}/api/v1/stores/stats/`, {
			headers: {
				'Content-Type': 'application/json',
			}
		});
		return res.ok ? await res.json() : { error: res };
    }
</script>
    <div class="w-full grid grid-cols-3 gap-2">
{#await getStats()}
    <div class="flex flex-col items-center justify-center rounded-lg py-4">
        <span class="text-3xl font-extrabold">0</span>
        <h2 class="text-lg font-thin uppercase">{$_('stats_products')}</h2>
    </div>
    <div class="flex flex-col items-center justify-center rounded-lg py-4">
        <span class="text-3xl font-extrabold">0</span>
        <h2 class="text-lg font-thin uppercase">{$_('stats_stores')}</h2>
    </div>
    <div class="flex flex-col items-center justify-center rounded-lg py-4">
        <span class="text-3xl font-extrabold">0</span>
        <h2 class="text-lg font-thin uppercase">{$_('stats_countries')}</h2>
    </div>
{:then data}
<div class="flex flex-col items-center justify-center rounded-lg py-4">
    <span class="text-3xl font-extrabold">{data.total_products}</span>
    <h2 class="text-lg font-thin uppercase">{$_('stats_products')}</h2>
</div>
<div class="flex flex-col items-center justify-center rounded-lg py-4">
    <span class="text-3xl font-extrabold">{data.total_stores}</span>
    <h2 class="text-lg font-thin uppercase">{$_('stats_stores')}</h2>
</div>
<div class="flex flex-col items-center justify-center rounded-lg py-4">
    <span class="text-3xl font-extrabold">{data.total_countries}</span>
    <h2 class="text-lg font-thin uppercase">{$_('stats_countries')}</h2>
</div>
{:catch}
    <span></span>
{/await}   
    </div>