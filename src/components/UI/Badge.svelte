<script>
  import { slide } from 'svelte/transition';
</script>

<span transition:slide><slot/></span>

<style>
  span {
    font-family: 'Lato';
    font-size: 13px;
    display: inline-block;
    border-radius: 3px;
    border: 1px solid #cf0056;
    background: #cf0056;
    color: white;
    padding: 0 5px;
  }
</style>