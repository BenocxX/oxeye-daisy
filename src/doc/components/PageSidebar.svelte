<script lang="ts">
  import Link from '$lib/components/link/Link.svelte';

  export let items: string[];
</script>

<div class="flex flex-col gap-2">
  <h4 class="text-xl">Sections</h4>
  {#each items as item}
    <Link
      scrollTo={{ container: '.drawer-content' }}
      href="#{item}"
      color="default"
      class="link-hover link text-base-content/75">{item}</Link
    >
  {/each}
</div>
