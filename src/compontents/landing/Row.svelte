<script>
    export let title;
</script>
<h1 class="text-3xl font-bold text-center mb-4">{title}</h1>
<div class="mx-4 md:mx-0 flex flex-col md:flex-row md:justify-around">
	<slot name="columns"/>
</div>