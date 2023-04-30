<script lang="ts">
  import PageHeader from '$doc/components/PageHeader.svelte';
  import CodeInline from '$doc/components/CodeInline.svelte';
  import type { Page } from '$doc/components/Sidebar.svelte';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  const test = 'lang="ts"';

  const currentPage = getContext<Writable<Page | undefined>>('currentPage');

  $: title = $currentPage?.title ?? 'Button';
</script>

# Button

Check out the <a target="_blank" href="https://daisyui.com/components/button" class="link text-base-content" >DaisyUI documentation</a> for more information about the {title} component.

## Setup

Import the <CodeInline>Button</CodeInline> component.

```svelte example hideDemo
<script>
  import Button from '$lib/components/button/Button.svelte';
</script>
```
