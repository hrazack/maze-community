<script>
  import config from "../lib/config.js";
	export let user;
  export let size = "medium";
  let imageUrl;
  
  if (user.field_image) {
    imageUrl = config.drupal_base_url+user.field_image;
  }
  else {
    imageUrl = "avatar-default.png";
  }
</script>

<style>
</style>

<div class="user-avatar {size}">
  <img src={imageUrl} alt="{user.field_first_name} {user.field_last_name}" />
</div>