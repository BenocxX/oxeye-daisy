<script lang="ts">
  import PageHeader from '$doc/components/PageHeader.svelte';
  import type { Page } from '$doc/components/Sidebar.svelte';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  const currentPage = getContext<Writable<Page | undefined>>('currentPage');

  $: title = $currentPage?.title ?? 'Button';
</script>

<PageHeader {title} daisyComponent={title.toLowerCase()} />
