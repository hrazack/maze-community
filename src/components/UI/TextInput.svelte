<script>
  export let controlType = "text";
  export let type = "text";
  export let id;
  export let label;
  export let value;
  export let isValid = true;
  export let errorMessage = "";
  
  let touched = false;
</script>

<div class="form-item">

  <label for="{id}">{label}</label>
  {#if controlType === "textarea"}
    <textarea {id} bind:value class:error={touched && !isValid} on:blur={() => touched=true} />
  {:else}
    <input {type} {id} {value} class:error={touched && !isValid} on:input on:blur={() => touched=true} />
  {/if}
  
  {#if (touched && !isValid)}
    <div class="error">{errorMessage}</div>
  {/if}
  
</div>

<style>
.form-item {margin: 0 0 24px 0;}
label {display: block; margin: 0 0 8px 0; width: 100%;}
input, textarea {display: block; width: 100%; max-width: 300px; font: inherit; border: 1px solid #ccc; border-radius: 3px 3px 0 0; background: white; padding: 12px; transition: border-color 0.1s ease-out;}
input:focus, textarea:focus {border-color: #e40763; outline: none;}
.error {color: red;}
</style>