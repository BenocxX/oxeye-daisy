<script context="module" lang="ts">
  const colors = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    info: 'btn-info',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error',
  };

  const variants = {
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    link: 'btn-link',
  };

  const sizes = {
    lg: 'btn-lg',
    md: 'btn-md',
    sm: 'btn-sm',
    xs: 'btn-xs',
  };

  const alignments = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
  };

  const shapes = {
    square: 'btn-square',
    circle: 'btn-circle',
  };

  const cases = {
    normal: 'normal-case',
    upper: 'upper-case',
    lower: 'lower-case',
  };

  export type Color = keyof typeof colors;
  export type Variant = keyof typeof variants;
  export type Size = keyof typeof sizes;
  export type Alignment = keyof typeof alignments;
  export type Shape = keyof typeof shapes;
  export type Case = keyof typeof cases;
</script>

<script lang="ts">
  import { getClasses, isVoidElement } from '$lib/utils.js';

  export let color: Color | undefined = undefined;
  export let variant: Variant | undefined = undefined;
  export let size: Size | undefined = undefined;
  export let alignment: Alignment | undefined = undefined;
  export let shape: Shape | undefined = undefined;
  export let fontCase: Case = 'normal';
  export let active: boolean = false;
  export let disabled: boolean = false;
  export let wide: boolean = false;
  export let block: boolean = false;
  export let loading: boolean = false;
  export let noAnimation: boolean = false;
  export let element: keyof HTMLElementTagNameMap = 'button';

  $: classes = getClasses(
    color && colors[color],
    variant && variants[variant],
    size && sizes[size],
    alignment && alignments[alignment],
    shape && shapes[shape],
    cases[fontCase],
    active && 'btn-active',
    disabled && 'btn-disabled',
    wide && 'btn-wide',
    block && 'btn-block',
    loading && 'loading',
    noAnimation && 'no-animation'
  );
</script>

{#if isVoidElement(element)}
  <svelte:element
    this={element}
    on:click
    class="btn {classes} {$$props.class}"
    {...$$restProps}
  />
{:else}
  <svelte:element
    this={element}
    on:click
    class="btn {classes} {$$props.class}"
    {...$$restProps}
  >
    <slot />
  </svelte:element>
{/if}
