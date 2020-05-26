<script>
  import UserAvatar from "../../components/UserAvatar.svelte";
  export let user;
</script>

<div class="profile-summary">
  <UserAvatar {user} />
  <div class="profile-summary-name">
    <h4>{user.fieldFirstName} {user.fieldLastName}</h4>
    <div class="jobtitle">{user.fieldJobTitle}</div>
  </div>
  <div class="profile-summary-social">
    {#if user.fieldFacebook != null} 
    <a href="{user.fieldFacebook.url.path}" target="new"><img src="icon-facebook-grey.png" alt="Facebook" width="10" /></a>
    {/if}
    {#if user.fieldTwitter != null} 
    <a href="{user.fieldTwitter.url.path}" target="new"><img src="icon-twitter-grey.png" alt="Twitter" /></a>
    {/if}
    {#if user.fieldLinkedin != null} 
    <a href="{user.fieldLinkedin.url.path}" target="new"><img src="icon-linkedin-grey.png" width="16" alt="LinkedIn" /></a>
    {/if}
  </div>
  <div class="profile-summary-actions">
    <a class="button">Follow</a>
    <a class="button">Message</a>
    <a class="button">Video call</a>
  </div>
</div>