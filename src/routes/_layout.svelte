<script>
  import { stores } from '@sapper/app';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import PreLoadingIndicator from '../components/PreLoadingIndicator.svelte';
  
	export let segment;
  const { preloading } = stores();
</script>

{#if $preloading}
	<PreLoadingIndicator />
{/if}

<Header {segment}/>

<main>
  <slot></slot>
</main>

<Footer/>
