<script context="module">
  export function preload(page) { // page argument contains path, query, and params
    return this.fetch(config.drupal_base_url+"jsonapi/user/user?page[limit]=10&include=field_image")
      .then(response => {
        if (!response.ok) {
          throw new Error('An error occured!');
        }
        return response.json();
      })
      .then(response => {
        // put everything in a coherent array
        const users = [];
        for(let u of response.data) {
          let user = u.attributes;
          user.id = u.id;
          if (u.relationships && u.relationships.field_image.data !== null) {
            let index = response.included.map(function(e) { return e.id; }).indexOf(u.relationships.field_image.data.id);
            user.field_image = response.included[index].attributes.uri.url;
          }
          users.push(user);
        }
        return {users};
      })
      .catch(err => {
        console.log(err);
        this.error(500, "Could not fetch users");
      });
  }
</script>

<script>
  import config from "../../lib/config.js";
  import Banner from "../../components/Banner.svelte";
  import UserTeaser from "./_UserTeaser.svelte";
  
  export let users;
</script>

<svelte:head>
  <title>People | {config.site_name}</title>
</svelte:head>

<Banner title="People" subtitle="Optional subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." />

<div id="content" class="container">

  <div class="people-list">
    {#each users as user}
      {#if user.drupal_internal__uid}
        <UserTeaser {user} />
      {/if}
    {/each}
  </div>


</div>
  