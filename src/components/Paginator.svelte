<script>
  import { stores } from "@sapper/app";
  export let pg = 0;
  export let max;
  export let prefetch = true;
  const { page } = stores();
  const rel = prefetch ? "prefetch" : "";
</script>

<div class="pager">

  {#if pg > 0}
    <a href="{$page.path}?pg={pg - 1}" {rel}>Prev</a>
  {:else}
    <span>Prev</span>
  {/if}

  {#if pg < Math.floor(max)}
    <a href="{$page.path}?pg={pg + 1}" {rel}>Next</a>
  {:else}
    <span>Next</span>
  {/if}

</div>


<style>
  .pager {margin-top: 30px;}
</style>