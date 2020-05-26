<script context="module">
  import {createClient, UserByPathQuery} from "../../lib/data.js";
  import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
  import config from "../../lib/config.js";
  import Banner from "../../components/Banner.svelte";
  import ProfileSummary from "./_ProfileSummary.svelte";
  import UserGroups from "./_UserGroups.svelte";
  import UserContent from "./_UserContent.svelte";
  
  export async function preload({ path }) {
    const client = createClient(this.fetch);
    const user = await client.query({
      query: UserByPathQuery,
      variables: { path }
    });
    return { user: user.data.route.entity };
  }
</script>

<script>
  export let user;
  let active = "Profile";
</script>

<svelte:head>
  <title>{user.fieldFirstName} {user.fieldLastName} | {config.site_name}</title>
</svelte:head>

<Banner title="" subtitle="" />

<div id="content" class="container">
  
  <div class="profile">
  
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
            {user.fieldProfile}
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
