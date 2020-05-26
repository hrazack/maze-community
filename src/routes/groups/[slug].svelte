<script context="module">
  import {createClient, NodeByPathQuery, getNodeURL} from "../../lib/data.js";
  import config from "../../lib/config.js";
  import Banner from "../../components/Banner.svelte";

  export async function preload({ path }) {
    const client = createClient(this.fetch);
    const node = await client.query({
      query: NodeByPathQuery,
      variables: { path }
    });
    return { node: node.data.route.entity };
  }
</script>

<script>
  export let node;
  let author = node.uid.entity;
</script>

<svelte:head>
  <title>{node.title} | {config.site_name}</title>
</svelte:head>

<Banner title="{node.title}" subtitle="Optional subtitle lorem ipsum dolor sit amet" />

<div id="content" class="container">

  Group content

</div>
