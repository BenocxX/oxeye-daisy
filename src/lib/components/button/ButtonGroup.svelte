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
  import type { GroupTypes } from '$lib/index.js';

  export let direction: Direction = 'default';
  export let buttons: GroupTypes.ItemData[] = [];

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
