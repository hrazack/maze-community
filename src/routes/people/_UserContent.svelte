<script context="module">
  
</script>

<script>
  import config from "../../lib/config.js";
  import UserContentItem from "./_UserContentItem.svelte";
  
  export let nodes = [];
  export let user;
</script>

<div class="user-content-list">
  {#each nodes as node}
    <UserContentItem {node} />
  {/each}
</div>
