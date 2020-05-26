<script>
  export let obj;
  let node = obj.entity;
  import { getNodeURL } from "../../lib/data.js";
</script>

<a class="item" href={getNodeURL(node)}>
  <h4>{node.title}</h4>
  <div class="tags">List of tags</div>
</a>
