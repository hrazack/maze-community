<script>
  import { fade } from 'svelte/transition';
  import UserAvatar from "../../components/UserAvatar.svelte";
  export let user;
</script>

<a class="item" rel="prefetch" href={user.path.alias} in:fade>
  <UserAvatar {user} size="small" />
  <div class="info">
    <h6>{user.field_first_name} {user.field_last_name}</h6>
    <div class="job-title">{user.field_job_title}</div>
  </div>
</a>
