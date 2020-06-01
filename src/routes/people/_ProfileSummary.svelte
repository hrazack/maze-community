<script>
  import UserAvatar from "../../components/UserAvatar.svelte";
  export let user;
</script>

<div class="profile-summary">
  <UserAvatar {user} />
  <div class="profile-summary-name">
    <h4>{user.field_first_name} {user.field_last_name}</h4>
    <div class="jobtitle">{user.field_job_title}</div>
  </div>
  <div class="profile-summary-social">
    {#if user.field_facebook != null} 
    <a href="{user.field_facebook.uri}" target="new"><img src="icon-facebook-grey.png" alt="Facebook" width="10" /></a>
    {/if}
    {#if user.field_twitter != null} 
    <a href="{user.field_twitter.uri}" target="new"><img src="icon-twitter-grey.png" alt="Twitter" /></a>
    {/if}
    {#if user.field_linkedin != null} 
    <a href="{user.field_linkedin.uri}" target="new"><img src="icon-linkedin-grey.png" width="16" alt="LinkedIn" /></a>
    {/if}
  </div>
  <div class="profile-summary-actions">
    <a class="button">Follow</a>
    <a class="button">Message</a>
    <a class="button">Video call</a>
  </div>
</div>