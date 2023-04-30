<div class="my-2">
  <div class="flex w-full flex-col overflow-hidden">
    <div
      class="flex justify-center rounded-t-xl border border-b-0 border-neutral bg-base-200"
    >
      <div
        class="min-h-12 flex w-full gap-2 overflow-hidden px-2 items-center justify-center py-3"
      >
        <slot name="example" />
      </div>
    </div>
    <pre class="language-svelte !m-0 !bg-neutral !rounded-none !rounded-b-xl"><slot name="code" /></pre>
  </div>
</div>
