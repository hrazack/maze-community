<script>
  import { onMount } from 'svelte';
	export let user;
  export let size = "medium";
  let imageUrl;
  
  onMount(async () => {
		if (user.fieldImage != null) {
      imageUrl = user.fieldImage.url;
    }
    else {
      imageUrl = "avatar-default.png";
    }
	});
  
  
</script>

<style>
</style>

<div class="user-avatar {size}">
  <img src={imageUrl} alt="{user.fieldFirstName} {user.fieldLastName}" />
</div>