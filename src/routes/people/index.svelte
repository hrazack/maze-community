<script context="module">
  import config from "../../lib/config.js";
  import { createClient, UsersQuery } from "../../lib/data.js";
  import Banner from "../../components/Banner.svelte";
  import Paginator from "../../components/Paginator.svelte";
  import UserTeaser from "./_UserTeaser.svelte";

  const limit = 10;

  export async function preload({ query }) {
    const client = createClient(this.fetch);
    let pg = 0;
    if (query.pg && !isNaN(query.pg)) {
      pg = parseInt(query.pg);
    }
    const offset = pg * limit;
    const users = await client.query({
      query: UsersQuery,
      variables: { limit, offset }
    });
    return {
      users: users.data.userQuery.entities,
      count: users.data.userQuery.count,
      pg
    };
  }
</script>

<script>
  export let users = 1;
  export let count;
  export let pg;
  let max = parseInt(count) / limit;
</script>

<svelte:head>
  <title>People | {config.site_name}</title>
</svelte:head>

<Banner title="People" subtitle="Optional subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." />

<div id="content" class="container">

  <div class="people-list">
    {#if users == 1 }
      Loading...
    {:else}
      {#each users as user}
        <UserTeaser {user} />
      {/each}
    {/if}
  </div>

  <Paginator {pg} {max} />

</div>
  