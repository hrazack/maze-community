<script context="module">
  
</script>

<script>
  import config from "../../lib/config.js";
  import Banner from "../../components/Banner.svelte";
  import TextInput from "../../components/UI/TextInput.svelte";
  import Button from "../../components/UI/Button.svelte";
  
  import {currentUser} from '../../stores/user.js';
  
  let email = "";
  let password = "";
  
  function login() {
    // TODO: contact Drupal
    //email = "IX Collective";
    //password = "ix001!";
    console.log(email, password);
    fetch(config.drupal_base_url + "user/login?_format=json", {
      method: 'POST',
      body: JSON.stringify({name: email, pass: password}),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error while fetching', response);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      currentUser.set({uid: data.current_user.uid});
      //document.location.href="/account";
    })
    .catch(err => {
      console.log(err)
    });
  }
</script>

<svelte:head>
  <title>Login | {config.site_name}</title>
</svelte:head>

<Banner title="Login" subtitle="Lorem ipsum" />

<div id="content" class="container">

  <TextInput label="Email" id="email" value={email} on:input={e => (email = e.target.value)}  />
  <TextInput label="Password" id="password" value={password} type="password" on:input={e => (password = e.target.value)} />
  <Button caption="Login" on:click={login} />
  
</div>
  