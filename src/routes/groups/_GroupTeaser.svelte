<script>
  import { scale } from 'svelte/transition';
  import { getNodeURL } from "../../lib/data.js";
  export let node;
</script>

<a class="item" rel="prefetch" href={getNodeURL(node)} in:scale>
  <div class="item-top"></div>
  <div class="item-bottom">
    <h3>{node.title}</h3>
    <div class="subtitle">{node.fieldSubtitle}</div>
  </div>
</a>