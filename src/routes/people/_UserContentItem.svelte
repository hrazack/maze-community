<script>
  export let node;
  import { getNodeURL } from "../../lib/data.js";
</script>

<a class="item" href={getNodeURL(node)}>
  <h4>{node.entityLabel}</h4>
  <div class="date">Date</div>
  <div class="tags">List of tags</div>
</a>
