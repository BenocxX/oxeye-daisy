<script context="module" lang="ts">
  export type Page = {
    title: string;
    route: string;
  };

  export type Section = {
    title: string;
    pages: Page[];
  };
</script>

<script lang="ts">
  export let sections: Section[];
</script>

<div class="flex flex-col overflow-y-auto pb-8">
  {#each sections as section, index}
    <div class="flex flex-col">
      <h4 class="py-1 pl-4 text-sm font-semibold text-base-content/50">
        {section.title}
      </h4>
      <div class="flex flex-col">
        {#each section.pages as page}
          <a
            href={page.route}
            class="rounded-lg py-1 pl-4 transition-all hover:bg-base-300"
          >
            {page.title}
          </a>
        {/each}
      </div>
    </div>

    {#if index < sections.length - 1}
      <div class="divider mx-8 my-2" />
    {/if}
  {/each}
</div>
