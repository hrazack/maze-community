<script>
  import { scale } from 'svelte/transition';
  export let group;
</script>

<a class="item" rel="prefetch" href={group.path.alias} in:scale>
  <div class="item-top"></div>
  <div class="item-bottom">
    <h3>{group.title}</h3>
    <div class="subtitle">{group.field_subtitle}</div>
  </div>
</a>