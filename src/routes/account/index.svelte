<script context="module">
  
</script>

<script>
  import config from "../../lib/config.js";
  import {currentUser} from '../../stores/user.js';
  import Banner from "../../components/Banner.svelte";
  
  if (!$currentUser) {
    document.location.href="/login";
  }
</script>

<svelte:head>
  <title>Account | {config.site_name}</title>
</svelte:head>

<Banner title="Account" subtitle="Lorem ipsum" />

<div id="content" class="container">

  Account. uid: {$currentUser.uid}
  
</div>
  