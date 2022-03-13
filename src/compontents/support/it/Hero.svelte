<script>
    import { variables } from '../../../variables';
    import Hero from '../../../compontents/landing/Hero.svelte'
	import SupportImage from '../SupportImage.svelte';
    export let onclick;
</script>
<Hero 
    title="Supporta {variables.websiteName}"
    subtitle="{variables.websiteName} ti fa risparmiare trovando i migliori prezzi per i prodotti che cerchi. "
    subtitleBold="Per continuare a rimanere attivo c'è bisogno del tuo aiuto"
    cta="Dona Ora"
    onclickCTA={onclick}>
    
    <svelte:fragment slot="svg">
        <SupportImage/>
    </svelte:fragment>
</Hero>