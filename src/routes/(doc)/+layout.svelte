<script lang="ts">
  import Sidebar, { type PageData } from '$doc/components/Sidebar.svelte';
  import Logo from '$images/logo.png';
  import { page } from '$app/stores';

  const sections = [
    {
      title: 'Getting Started',
      pages: [
        {
          title: 'Installation',
          route: '/installation',
        },
      ],
    },
    {
      title: 'Components',
      pages: [
        {
          title: 'Button',
          route: '/button',
        },
        {
          title: 'Button Group',
          route: '/button-group',
        },
        {
          title: 'Group',
          route: '/group',
        },
      ],
    },
  ];
</script>

<div class="flex">
  <div class="flex h-screen w-1/5 flex-col bg-base-200 px-4 pt-2">
    <a
      href="/"
      class="mb-8 flex w-max items-center gap-2 rounded-lg px-4 py-2 text-2xl transition-all hover:bg-base-300"
    >
      <img src={Logo} alt="Oxeye Daisy flower" class="aspect-square w-7" />
      Oxeye Daisy
    </a>
    <Sidebar {sections} />
  </div>
  <div class="max-w-none w-4/5 px-16 pt-8">
    <slot />
  </div>
</div>
