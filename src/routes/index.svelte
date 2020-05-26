<script>
  import config from "../lib/config.js";
  import Banner from "../components/Banner.svelte";
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>{config.site_name}</title>
</svelte:head>

<Banner title="Welcome" subtitle="" />

<div id="content" class="container" in:fade>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie tristique nisi in pretium. Fusce facilisis, magna et fermentum lacinia, orci ipsum cursus ante, a rhoncus dolor dui a odio. Phasellus eu vestibulum nunc. Sed varius nisi massa, vel sollicitudin erat facilisis sit amet. Nulla varius vehicula neque ut egestas. Aliquam venenatis feugiat dictum. Etiam gravida velit nec risus pharetra tempus id sed felis. Ut commodo enim sit amet elit tincidunt, a porta dolor varius. Duis consectetur condimentum eleifend. Quisque at leo eleifend, ultricies nibh non, tincidunt nisl. Integer mattis consequat pretium.</p>
  <p>Pellentesque mauris nulla, blandit a lacus ac, mattis imperdiet erat. Phasellus ac sem hendrerit, lacinia nunc non, porta arcu. Aliquam suscipit tempus justo id venenatis. Aliquam hendrerit elementum velit eu eleifend. Mauris eget elit dui. Mauris facilisis nisi non auctor semper. Donec semper suscipit erat, eu posuere sem interdum sit amet. Quisque facilisis libero eget efficitur facilisis. Cras malesuada sed quam eu bibendum. Proin nec ligula vel leo sodales feugiat quis eget lacus. Donec non tincidunt dolor.</p>
</div>
