<script lang="ts">
  import { Button, ButtonGroup } from '$lib/index.js';
</script>

<ButtonGroup
  buttons={[
    { value: 'First', selected: true },
    { value: 'Second' },
    { value: 'Third' },
  ]}
  let:value
  let:select
  let:isSelected
>
  <Button on:click={select} active={isSelected()} noAnimation={isSelected()}>
    {value}
  </Button>
</ButtonGroup>
