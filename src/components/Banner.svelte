<script>
  import { fade } from 'svelte/transition';
	export let title;
  export let subtitle;
</script>

<style>
</style>

<div id="banner" in:fade>
  <div class="container">
    <h1>{title}</h1>
    <div class="subtitle">{subtitle}</div>
  </div>
</div>