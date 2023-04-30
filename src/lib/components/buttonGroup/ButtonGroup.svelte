<script context="module" lang="ts">
  const directions = {
    default: '',
    horizontal: 'btn-group-horizontal',
    vertical: 'btn-group-vertical',
  };

  export type Direction = keyof typeof directions;
</script>

<script lang="ts">
  import { Group } from '$lib/index.js';
  import { getClasses } from '$lib/utils.js';
  import type { ItemData } from '$lib/components/group/Group.svelte';

  export let direction: Direction = 'default';
  export let buttons: ItemData[] = [];

  $: classes = getClasses(directions[direction]);
</script>

<Group
  items={buttons}
  let:value
  let:select
  let:isSelected
  class="btn-group {classes} {$$props.class}"
>
  <slot {value} {select} {isSelected} />
</Group>
