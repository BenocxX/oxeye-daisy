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
  }

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
  export type Input = {
    value: string;
    type?: 'button' | 'submit' | 'reset';
    name?: string;
  };
</script>

<script lang="ts">
  import { getClasses } from '$lib/utils.js';

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

  $: classes = getClasses(
    color && colors[color],
    variant && variants[variant],
    size && sizes[size],
    alignment && alignments[alignment],
    shape && shapes[shape],
    cases[fontCase],
    active && 'btn-active',
    wide && 'btn-wide',
    block && 'btn-block',
    loading && 'loading',
    noAnimation && 'no-animation',
  );

  export let input: Input | undefined = undefined;
</script>

{#if input}
  <input
    on:click
    class="btn btn-active {classes} {$$props.class}"
    type={input.type || 'button'}
    value={input.value}
    name={input.name}
    {...$$restProps}
  />
{:else}
  <button
    on:click
    class="btn {classes} {$$props.class}"
    disabled={disabled || loading}
    {...$$restProps}
  >
    <slot />
  </button>
{/if}
