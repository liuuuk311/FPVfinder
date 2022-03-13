<script>
    import { variables } from '../../../variables';
    import ShareIcon from '../ShareIcon.svelte';
    import Column from '../../landing/Column.svelte';

</script>
<Column 
    title="Condividi con i tuoi amici" 
    subtitle="Condividi {variables.websiteName} con altri piloti e con i tuoi amici. Anche parlare nella tua community o nel tuo gruppo può aiutare.">
<svelte:fragment slot="image">
    <ShareIcon />
</svelte:fragment>
</Column>