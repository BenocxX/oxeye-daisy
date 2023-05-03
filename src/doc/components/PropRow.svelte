<script lang="ts">
  import { getHrefFromCamelCase } from '$doc/utils.js';
  import Link from '$lib/components/link/Link.svelte'

  export let name: string;
  export let type: string;
  export let defaultValue: string | undefined = undefined;
  export let noSection: boolean = false;
</script>

<tr>
  <td>
    {#if noSection}
       {name}
    {:else}
      <Link scrollTo={{ container: '.drawer-content' }} href="#{getHrefFromCamelCase(name)}">
        {name}
      </Link>
    {/if}
  </td>
  <td class="whitespace-normal">{type}</td>
  <td>{defaultValue || ''}</td>
</tr>