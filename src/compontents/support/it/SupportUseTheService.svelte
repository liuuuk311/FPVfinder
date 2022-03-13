<script>
    import { variables } from '../../../variables';
    import BuyIcon from '../BuyIcon.svelte';
    import Column from '../../landing/Column.svelte';

</script>
<Column 
    title="Acquista tramite {variables.websiteName}" 
    subtitle="Quando compri un prodotto partendo da questo sito, alcuni shop daranno una piccola commissione a {variables.websiteName} senza nessun ulteriore costo per te.">
<svelte:fragment slot="image">
    <BuyIcon />
</svelte:fragment>
</Column>