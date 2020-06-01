<script context="module">
  export function preload(page) { // page argument contains path, query, and params
    return this.fetch(config.drupal_base_url+"jsonapi/node/group?page[limit]=10")
      .then(response => {
        if (!response.ok) {
          throw new Error('An error occured!');
        }
        return response.json();
      })
      .then(response => {
        // put everything in a coherent array
        const groups = [];
        for(let g of response.data) {
          let group = g.attributes;
          group.id = g.id;
          /*if (u.relationships && u.relationships.field_image.data !== null) {
            let index = response.included.map(function(e) { return e.id; }).indexOf(u.relationships.field_image.data.id);
            group.field_image = response.included[index].attributes.uri.url;
          }*/
          groups.push(group);
        }
        //console.log("GROUPS", groups);
        return {groups};
      })
      .catch(err => {
        console.log(err);
        this.error(500, "Could not fetch groups");
      });
  }
</script>

<script>
  import config from "../../lib/config.js";
  import Banner from "../../components/Banner.svelte";
  import GroupTeaser from "./_GroupTeaser.svelte";
 
  export let groups;
</script>

<svelte:head>
  <title>Groups | {config.site_name}</title>
</svelte:head>

<Banner title="Groups" subtitle="Cool" />

<div id="content" class="container">

  <div class="groups-list">
    {#each groups as group}
      <GroupTeaser {group} />
    {/each}
  </div>

</div>
  