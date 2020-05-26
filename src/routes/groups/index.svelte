<script context="module">
  /// anything inside here runs only on the server - that's useful mostly for using this.fetch (provided by Sapper), as fetch does not exist in server-side javascript
  /*
  two options for fetch:
  - using it inside context=module, with this.fetch -> use this if we need SEO
  - using it with onmount -> can be used if no SEO needed
  */
  import { createClient, GroupsQuery } from "../../lib/data.js";
  
  const limit = 9;
  
  export async function preload({ query }) {
    const client = createClient(this.fetch);
    //let pg = 0;
    //if (query.pg && !isNaN(query.pg)) {
    //  pg = parseInt(query.pg);
    //}
    //const offset = pg * limit;
    const offset = 0;
    const nodes = await client.query({
      query: GroupsQuery,
      variables: { limit, offset }
    });
    return {
      nodes: nodes.data.nodeQuery.entities,
      //count: nodes.data.nodeQuery.count,
      //pg
    };
  }
</script>

<script>
  import { scale, fade } from 'svelte/transition';
  import config from "../../lib/config.js";
  import Banner from "../../components/Banner.svelte";
  import GroupTeaser from "./_GroupTeaser.svelte";
  import Paginator from "../../components/Paginator.svelte";
  
  export let nodes = 1;
  //export let count;
  //export let pg;
  //let max = parseInt(count) / limit;
  
  // fetch() would not work here (it would work with a client-only svelte app, but not with a server app, as fetch does not exist in nodejs
  // we would have to use it inside onmount
</script>

<svelte:head>
  <title>Groups | {config.site_name}</title>
</svelte:head>

<Banner title="Groups" subtitle="Cool" />

<div id="content" class="container">

  <div class="groups-list">
    {#if nodes == 1 }
      Loading...
    {:else}
      {#each nodes as node}
        <GroupTeaser {node} />
      {/each}
    {/if}
  </div>

  <!--<Paginator {pg} {max} />-->

</div>
  