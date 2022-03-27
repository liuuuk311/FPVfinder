<script>
    import { variables } from '../variables';

    export let title;
    export let metadescription;
    export let language;
   
    const pageTitle = `${title} | ${variables.websiteName}`
  </script>
    
  <svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={metadescription} />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    {#if language !== undefined}
        <html lang={language} />
    {/if}
  </svelte:head>