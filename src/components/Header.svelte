<script>
  import {currentUser} from '../stores/user.js';
	export let segment;
  
  function logout() {
    currentUser.set(null);
  }
</script>

<style>
</style>

<header>
  <a href="/" id="logo"><img src="logo.png" width="40" alt="Logo" /></a>
  <nav>
    <ul>
      <li><a rel=prefetch class:selected='{segment === undefined}' href='.'>Home</a></li>
      <li><a rel=prefetch class:selected='{segment === "people"}' href='people'>People</a></li>
      <li><a rel=prefetch class:selected='{segment === "groups"}' href='groups'>Groups</a></li>
      <li><a class:selected='{segment === "about"}' href='about'>About</a></li>
      {#if $currentUser }
        <li><a class:selected='{segment === "account"}' href='account'>Account</a></li>
        <li><span id="logout" on:click={logout}>Logout</span></li>
      {:else}
        <li><a class:selected='{segment === "login"}' href='login'>Login</a></li>
      {/if}
    </ul>
  </nav>
</header>