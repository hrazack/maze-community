<script context="module">
  export function preload(page) { // page argument contains path, query, and params
    return this.fetch(config.drupal_base_url+"jsonapi/node/group?filter[field_path]=/groups/"+page.params.slug)
      .then(response => {
        if (!response.ok) {
          throw new Error('An error occured!');
        }
        return response.json();
      })
      .then(response => {
        const node = response.data[0].attributes;
        //console.log(node);
        return {node};
      })
      .catch(err => {
        console.log(err);
        this.error(500, "Could not fetch this group");
      });
  }
</script>

<script>
  import config from "../../lib/config.js";
  import Banner from "../../components/Banner.svelte";
  
  export let node;
</script>

<svelte:head>
  <title>{node.title} | {config.site_name}</title>
</svelte:head>

<Banner title="{node.title}" subtitle="{node.field_subtitle}" />

<div id="content" class="container">

  Group content

</div>
