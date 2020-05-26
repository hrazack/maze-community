<script>
  import Modal from '../UI/Modal.svelte';
  
  export let message;
</script>

<Modal title="an error occured" on:close>
  <p>{message}</p>
</Modal>