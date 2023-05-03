<script lang="ts">
  export let compact: boolean = false;
  export let titles: string[] = [];
  export let titleClass: string = '';
</script>

<div class="overflow-x-auto">
  <table class="table w-full {$$props.class}" class:table-compact={compact}>
    <thead>
      {#if $$slots.head}
        <slot name="head" />
      {:else}
        <tr>
          {#each titles as title}
            <th class={titleClass}>{title}</th>
          {/each}
        </tr>
      {/if}
    </thead>
    <tbody>
      <slot />
    </tbody>
  </table>
</div>