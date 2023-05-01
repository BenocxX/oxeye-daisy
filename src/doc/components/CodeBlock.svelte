<script lang="ts">
  import Button from '$lib/components/button/Button.svelte';
  import copy from 'copy-to-clipboard';

  export let src: string;
  export let meta: any;

  let clipboardIcon = 'mdi:clipboard-multiple-outline';
  let clipboardTooltip = 'Copy to clipboard';
  let clipboardStyle = '';
  let hasCopied = false;

  function handleCopy() {
    copy(src);
    if (hasCopied) {
      return;
    }

    clipboardIcon = 'mdi:clipboard-check-multiple-outline';
    clipboardTooltip = 'Copied to clipboard!';
    clipboardStyle = 'text-success';

    hasCopied = true;

    setTimeout(() => {
      clipboardIcon = 'mdi:clipboard-multiple-outline';
      clipboardTooltip = 'Copy to clipboard';
      clipboardStyle = '';
      hasCopied = false;
    }, 1500);
  }
</script>

<div class="my-4">
  <div class="flex w-full flex-col overflow-hidden">
    <div
      class="flex items-center justify-between rounded-t-xl border border-neutral bg-base-300 py-2 pl-4 pr-2"
    >
      <span>Svelte</span>
      <div
        class="tooltip tooltip-left tooltip-accent transition-all {clipboardStyle}"
        data-tip={clipboardTooltip}
      >
        <Button color="ghost" size="sm" on:click={handleCopy}>
          Copy
          <iconify-icon width="20px" class="ml-2" icon={clipboardIcon} />
        </Button>
      </div>
    </div>
    {#if !meta.hideDemo}
      <div class="flex justify-center border-x border-neutral bg-base-200">
        <div
          class="flex w-full items-center justify-center gap-2 overflow-hidden px-2 py-3"
        >
          <slot name="example" />
        </div>
      </div>
    {/if}
    <pre
      class="language-svelte !m-0 !rounded-none !rounded-b-xl !bg-neutral"><slot
        name="code"
      /></pre>
  </div>
</div>
