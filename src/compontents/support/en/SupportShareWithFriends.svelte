<script>
    import { variables } from '../../../variables';
    import ShareIcon from '../ShareIcon.svelte';
    import Column from '../../landing/Column.svelte';

</script>
<Column 
    title="Share with your friends" 
    subtitle="Sharing {variables.websiteName} with other pilots and your friends will help the website grow. Even talking about it in your local community will help.">
<svelte:fragment slot="image">
    <ShareIcon />
</svelte:fragment>
</Column>