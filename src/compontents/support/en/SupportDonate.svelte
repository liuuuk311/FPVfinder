<script>
    import { variables } from '../../../variables';
    import DonateIcon from '../DonateIcon.svelte';
    import Column from '../../landing/Column.svelte';

</script>
<Column 
    title="Donate" 
    subtitle="{variables.websiteName} is free and it is running 24/7, to always give you the possibility to save money. Unfortunatly, it runs on servers that have a cost.">
<svelte:fragment slot="image">
    <DonateIcon />
</svelte:fragment>
</Column>