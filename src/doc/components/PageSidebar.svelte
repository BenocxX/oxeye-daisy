<script lang="ts">
  import { getHrefFromString } from '$doc/utils.js';
  import Link from '$lib/components/link/Link.svelte';

  export let items: (string | { section: string; subSections: string[] })[];
</script>

<div class="flex flex-col gap-2">
  <h4 class="text-xl">Sections</h4>
  <ul class="space-y-1">
    {#each items as item}
      <li>
        {#if typeof item === 'string'}
          <Link
            scrollTo={{ container: '.drawer-content' }}
            href="#{getHrefFromString(item)}"
            color="default"
            class="link-hover link text-base-content/75">{item}</Link
          >
        {:else}
          <Link
            scrollTo={{ container: '.drawer-content' }}
            href="#{getHrefFromString(item.section)}"
            color="default"
            class="link-hover link text-base-content/75">{item.section}</Link
          >
          <ul>
            {#each item.subSections as subSection}
              <li class="ml-4">
                <Link
                  scrollTo={{ container: '.drawer-content' }}
                  href="#{getHrefFromString(subSection)}"
                  color="default"
                  class="link-hover link text-base-content/75">{subSection}</Link
                >
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</div>
