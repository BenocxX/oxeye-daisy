<script lang="ts">
  import Sidebar, { type PageData } from '$doc/components/Sidebar.svelte';
  import Logo from '$images/logo.png';
  import { page } from '$app/stores';

  const sections = [
    {
      title: 'Getting Started',
      pages: [
        {
          title: 'Quickstart',
          route: '/getting-started',
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

<div class="drawer-mobile drawer">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <div class="fixed flex h-16 w-full items-center bg-base-200 px-2 lg:hidden">
      <label for="my-drawer-2" class="btn-ghost btn-square btn lg:hidden">
        <iconify-icon width="32px" icon="mdi:menu" />
      </label>
      <a
        href="/"
        class="flex w-max items-center gap-2 rounded-lg px-4 py-2 text-2xl transition-all hover:bg-base-300"
      >
        <img src={Logo} alt="Oxeye Daisy flower" class="aspect-square w-7" />
        Oxeye Daisy
      </a>
    </div>
    <div class="mx-8 mt-[6rem] lg:mx-12 lg:mt-8">
      <div class="w-full max-w-none">
        <slot />
      </div>
    </div>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay" />
    <ul class="menu w-80">
      <div class="flex h-screen flex-col bg-base-200 px-4 pt-2">
        <a
          href="/"
          class="mb-8 flex w-max items-center gap-2 rounded-lg px-4 py-2 text-2xl transition-all hover:bg-base-300"
        >
          <img src={Logo} alt="Oxeye Daisy flower" class="aspect-square w-7" />
          Oxeye Daisy
        </a>
        <Sidebar {sections} />
      </div>
    </ul>
  </div>
</div>
