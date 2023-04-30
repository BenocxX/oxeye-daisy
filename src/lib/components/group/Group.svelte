<script context="module" lang="ts">
  export type ItemData = {
    value: string;
    id?: string;
    onSelect?: () => void;
    onDeselect?: () => void;
    selected?: boolean;
  };
</script>

<script lang="ts">
  export let items: ItemData[] = [];

  let selectedItem: string;

  items.forEach((item) => {
    if (!item.id) {
      item.id = crypto.randomUUID();
    }
    if (item.selected) {
      selectedItem = item.id;
    }
  });

  function select(item: ItemData) {
    if (item.id && item.id !== selectedItem) {
      const currentItem = getSelectedItem();
      if (currentItem && currentItem.onDeselect) {
        currentItem.onDeselect();
      }

      selectedItem = item.id;

      if (item.onSelect) {
        item.onSelect();
      }
    }
  }

  function getSelectedItem() {
    return items.find((item) => item.id === selectedItem);
  }
</script>

<div class={$$props.class}>
  {#each items as item}
    <slot
      value={item.value}
      select={() => select(item)}
      isSelected={() => item.id === selectedItem}
    />
  {/each}
</div>
