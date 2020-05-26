<script>
  import { fade } from 'svelte/transition';
  import UserAvatar from "../../components/UserAvatar.svelte";
  import { getUserURL } from "../../lib/data.js";
  export let user;
</script>

<a class="item" href={getUserURL(user)} in:fade>
  <UserAvatar {user} size="small" />
  <div class="info">
    <h6>{user.fieldFirstName} {user.fieldLastName}</h6>
    <div class="job-title">{user.fieldJobTitle}</div>
  </div>
</a>
