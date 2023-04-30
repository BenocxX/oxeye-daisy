<script lang="ts">
  export let title: string;
  export let daisyComponent: string | undefined = undefined;
</script>

<h1 class="mb-0">{title}</h1>
{#if daisyComponent}
  <p class="mt-2 mb-0 text-base-content/75">
    Check out the
    <a
      target="_blank"
      href="https://daisyui.com/components/{daisyComponent}"
      class="link text-base-content"
    >
      DaisyUI documentation
    </a>
    for more information about the {title} component.
  </p>
{/if}
<div class="divider" />
