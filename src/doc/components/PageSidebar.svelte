<script lang="ts">
  export let items: string[];
</script>

<div class="flex flex-col gap-2">
  <h4 class="text-xl">Sections</h4>
  {#each items as item}
    <a href="#{item}" class="link link-hover text-base-content/75">{item}</a>
  {/each}
</div>