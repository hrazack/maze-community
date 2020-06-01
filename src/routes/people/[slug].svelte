<script context="module">
  export function preload(page) { // page argument contains path, query, and params
    return this.fetch(config.drupal_base_url+"jsonapi/user/user?filter[field_path]=/people/"+page.params.slug+"&include=field_image")
      .then(response => {
        if (!response.ok) {
          throw new Error('An error occured!');
        }
        return response.json();
      })
      .then(response => {
        const user = response.data[0].attributes;
        if (response.data[0].relationships && response.data[0].relationships.field_image.data !== null) {
          user.field_image = response.included[0].attributes.uri.url;
        }
        //console.log(user);
        return {user};
      })
      .catch(err => {
        console.log(err);
        this.error(500, "Could not fetch user");
      });
  }
</script>

<script>
  import { fade } from 'svelte/transition';
  import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
  import config from "../../lib/config.js";
  import Banner from "../../components/Banner.svelte";
  import ProfileSummary from "./_ProfileSummary.svelte";
  import UserGroups from "./_UserGroups.svelte";
  import UserContent from "./_UserContent.svelte";
  
  export let user;
  let active = "Profile";
</script>

<svelte:head>
  <title>{user.field_first_name} {user.field_last_name} | {config.site_name}</title>
</svelte:head>

<Banner title="" subtitle="" />

<div id="content" class="container">
  
  <div class="profile" in:fade>
  
    <ProfileSummary {user} />
  
    <div class="profile-detail">
      
      <Tabs>
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Activity</Tab>
          <Tab>Groups</Tab>
          <Tab>Content</Tab>
          <Tab>Events</Tab>
        </TabList>

        <TabPanel>
          <div class="inside">
            {user.field_profile}
          </div>
        </TabPanel>

        <TabPanel>
          <div class="inside">
            Activity
          </div>
        </TabPanel>

        <TabPanel>
          <div class="inside">
            <UserGroups {user} />
          </div>
        </TabPanel>
        
        <TabPanel>
          <div class="inside">
            <UserContent {user} />
          </div>
        </TabPanel>
        
        <TabPanel>
          <div class="inside">
            Events
          </div>
        </TabPanel>
      </Tabs>

    </div>
    
  </div>

</div>
