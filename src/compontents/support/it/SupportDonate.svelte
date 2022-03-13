<script>
    import { variables } from '../../../variables';
    import DonateIcon from '../DonateIcon.svelte';
    import Column from '../../landing/Column.svelte';

</script>
<Column 
    title="Dona" 
    subtitle="{variables.websiteName} è un servizio gratuito che funziona 24h su 24h, e ti permette sempre di risparmiare. Purtroppo per i server che servono per farlo funzionare hanno un costo.">
<svelte:fragment slot="image">
    <DonateIcon />
</svelte:fragment>
</Column>