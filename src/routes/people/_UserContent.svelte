<script context="module">
  import config from "../../lib/config.js";
  import { createClient, UserContentQuery } from "../../lib/data.js";
  import Paginator from "../../components/Paginator.svelte";
  import UserContentItem from "./_UserContentItem.svelte";

  const limit = 10;
  const uid = 5;
  
  export async function preload({ query }) {
    const client = createClient(this.fetch);
    let pg = 0;
    if (query.pg && !isNaN(query.pg)) {
      pg = parseInt(query.pg);
    }
    const offset = pg * limit;
    const nodes = await client.query({
      query: UserContentQuery,
      variables: { uid, limit, offset }
    });
    return {
      nodes: nodes.data.nodeQuery.entities,
      count: nodes.data.nodeQuery.count,
      pg
    };
  }
</script>

<script>
  export let nodes = [];
  export let count;
  export let pg;
  export let user;
  //let uid = user.uid;
  let max = parseInt(count) / limit;
</script>

<div class="user-content-list">
  {#each nodes as node}
    <UserContentItem {node} />
  {/each}
</div>
