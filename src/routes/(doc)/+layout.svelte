<script lang="ts">
  import Sidebar from '$components/Sidebar.svelte';
  import Logo from '$images/logo.png';

  const sections = [
    {
      title: 'Getting Started',
      pages: [
        {
          title: 'Installation',
          route: '/docs/installation',
        },
      ],
    },
    {
      title: 'Components',
      pages: [
        {
          title: 'Button',
          route: '/docs/button',
        },
        {
          title: 'Button Group',
          route: '/docs/button-group',
        },
        {
          title: 'Group',
          route: '/docs/group',
        },
      ],
    },
  ];
</script>

<div class="flex">
  <div class="flex h-screen w-1/4 flex-col bg-base-200 px-4 pt-2">
    <a
      href="/"
      class="mb-8 flex gap-2 items-center w-max rounded-lg px-4 py-2 text-2xl transition-all hover:bg-base-300"
    >
      <img src={Logo} alt="Oxeye Daisy flower" class="w-7 aspect-square">
      Oxeye Daisy
    </a>
    <Sidebar {sections} />
  </div>
  <div class="w-3/4 px-16 pt-32">
    <slot />
  </div>
</div>
