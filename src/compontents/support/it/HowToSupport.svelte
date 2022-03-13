<script>
    import { variables } from '../../../variables';
    import Row from '../../landing/Row.svelte';
    import SupportDonate from './SupportDonate.svelte';
    import SupportShareWithFriends from './SupportShareWithFriends.svelte';
    import SupportUseTheService from './SupportUseTheService.svelte';
</script>
<Row title="Come posso supportare {variables.websiteName}?">
<svelte:fragment slot="columns">
    <SupportUseTheService/>
    <SupportShareWithFriends/>
    <SupportDonate/>
</svelte:fragment>
</Row>