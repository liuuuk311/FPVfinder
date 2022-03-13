<script>
	import { variables } from '../../variables';
	import Hero from '../../compontents/support/it/Hero.svelte'
	import HowToSupport from '../../compontents/support/it/HowToSupport.svelte';
	import Donate from '../../compontents/support/it/Donate.svelte';

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<svelte:head>
	<title>Support {variables.websiteName}</title>
</svelte:head>
<div>
	<Hero onclick={scrollIntoView}/>
	<HowToSupport />
    <Donate />
</div>
