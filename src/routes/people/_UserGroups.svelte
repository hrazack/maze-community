<script>
  import UserGroupsItem from "./_UserGroupsItem.svelte";
  export let user;
</script>

<div class="user-groups-list">
  {#each user.fieldGroups as obj}
    <UserGroupsItem {obj} />
  {/each}
</div>
