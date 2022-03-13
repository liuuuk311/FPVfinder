<script>
    import { variables } from '../../../variables';
    import Hero from '../../../compontents/landing/Hero.svelte'
	import SupportImage from '../SupportImage.svelte';
    export let onclick;
</script>
<Hero 
    title="Support {variables.websiteName}"
    subtitle="{variables.websiteName}'s aim is helping you save some bucks by finding the best prices on the market. "
    subtitleBold="Do you wanna give something back?"
    cta="Donate now"
    onclickCTA={onclick}>
    
    <svelte:fragment slot="svg">
        <SupportImage/>
    </svelte:fragment>
</Hero>