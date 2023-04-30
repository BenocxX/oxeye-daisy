<script lang="ts">
  export let src: string;
  export let meta: any;

  $: src;

  console.log(meta.hideDemo);
</script>

<div class="my-2">
  <div class="flex w-full flex-col overflow-hidden">
    {#if !meta.hideDemo}
      <div
        class="flex justify-center rounded-t-xl border border-b-0 border-neutral bg-base-200"
      >
        <div
          class="flex w-full items-center justify-center gap-2 overflow-hidden px-2 py-3"
        >
          <slot name="example" />
        </div>
      </div>
    {/if}
    <pre
      class="language-svelte !m-0 !bg-neutral {meta.hideDemo
        ? '!rounded-xl'
        : '!rounded-none !rounded-b-xl'}"><slot name="code" /></pre>
  </div>
</div>
