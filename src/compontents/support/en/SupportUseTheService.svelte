<script>
    import { variables } from '../../../variables';
    import BuyIcon from '../BuyIcon.svelte';
    import Column from '../../landing/Column.svelte';

</script>
<Column 
    title="Buy through {variables.websiteName}" 
    subtitle="When you buy a product through this website, some shops will give a small commission to {variables.websiteName} at no additional costs for you.">
<svelte:fragment slot="image">
    <BuyIcon />
</svelte:fragment>
</Column>