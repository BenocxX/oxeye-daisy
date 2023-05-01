<script context="module" lang="ts">
  export type PageData = {
    title: string;
    route: string;
  };

  export type Section = {
    title: string;
    pages: PageData[];
  };
</script>

<script lang="ts">
  import { page as pageStore } from '$app/stores';

  export let sections: Section[];
</script>

<div class="flex flex-col overflow-y-auto pb-8">
  {#each sections as section, index}
    <div class="flex flex-col">
      <h4 class="py-1 pl-4 text-sm text-base-content/60">
        {section.title}
      </h4>
      <div class="flex flex-col">
        {#each section.pages as page}
          {@const isCurrentPage = $pageStore.url.pathname === page.route}
          <a
            href={page.route}
            class="rounded-lg py-1 pl-4 transition-all
              {isCurrentPage
              ? 'bg-primary text-primary-content hover:bg-primary-focus'
              : 'hover:bg-base-300'}"
          >
            {page.title}
          </a>
        {/each}
      </div>
    </div>

    {#if index < sections.length - 1}
      <div class="divider mx-4 my-2" />
    {/if}
  {/each}
</div>
