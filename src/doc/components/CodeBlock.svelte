<script lang="ts">
  import Button from '$lib/components/button/Button.svelte';
  import Prism from 'prismjs';
  import copy from 'copy-to-clipboard';
  import {
    capitalizeFirstLetter,
    getPrismLanguage,
    type PrismLanguage,
  } from '$doc/utils.js';

  export let src: string = '';
  export let meta: any = {};
  export let code: string | undefined = undefined;
  export let language: PrismLanguage = 'svelte';

  let html = '';
  if (code && language !== 'svelte') {
    const prismLanguage = getPrismLanguage(language);
    html = Prism.highlight(code, prismLanguage, language);
  }

  let clipboardIcon = 'mdi:clipboard-multiple-outline';
  let clipboardTooltip = 'Copy to clipboard';
  let clipboardStyle = '';
  let hasCopied = false;

  function handleCopy() {
    if ($$slots.code) {
      copy(src);
    } else if (code) {
      copy(code);
    } else {
      return;
    }

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
      <span>{capitalizeFirstLetter(language)}</span>
      <div
        class="tooltip tooltip-left tooltip-accent transition-all {clipboardStyle}"
        data-tip={clipboardTooltip}
      >
        <Button variant="ghost" size="sm" on:click={handleCopy}>
          Copy
          <iconify-icon width="20px" class="ml-2" icon={clipboardIcon} />
        </Button>
      </div>
    </div>
    {#if meta && !meta.hideDemo && $$slots.example}
      <div class="flex justify-center border-x border-neutral bg-base-200">
        <div
          class="flex overflow-x-auto items-center {meta.full ? 'w-full' : 'mx-auto'} gap-2 px-2 py-3"
        >
          <slot name="example" />
        </div>
      </div>
    {/if}
    {#if $$slots.code}
      <pre
        class="language-svelte !m-0 !rounded-none !rounded-b-xl !bg-neutral"><slot
          name="code"
        /></pre>
    {:else}
      <pre
        class="language-{language} !m-0 whitespace-normal !rounded-none !rounded-b-xl !bg-neutral">{@html html}</pre>
    {/if}
  </div>
</div>
