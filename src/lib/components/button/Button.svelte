<script context="module" lang="ts">
  const colors = {
    default: '',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    info: 'btn-info',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error',
    ghost: 'btn-ghost',
    link: 'btn-link',
  };
  const sizes = {
    lg: 'btn-lg',
    md: '',
    sm: 'btn-sm',
    xs: 'btn-xs',
  };
  const alignments = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
  };
  const shapes = {
    default: '',
    square: 'btn-square',
    circle: 'btn-circle',
  };
  const cases = {
    default: 'normal-case',
    uppercase: 'upper-case',
    lowercase: 'lower-case',
  };
  export type Color = keyof typeof colors;
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
  export let color: Color = 'default';
  export let size: Size = 'md';
  export let alignment: Alignment = 'center';
  export let shape: Shape = 'default';
  export let fontCase: Case = 'default';
  export let active: boolean = false;
  export let disabled: boolean = false;
  export let outline: boolean = false;
  export let wide: boolean = false;
  export let block: boolean = false;
  export let loading: boolean = false;
  export let noAnimation: boolean = false;
  $: classes = getClasses(
    colors[color],
    sizes[size],
    alignments[alignment],
    shapes[shape],
    cases[fontCase],
    active ? 'btn-active' : '',
    outline ? 'btn-outline' : '',
    wide ? 'btn-wide' : '',
    block ? 'btn-block' : '',
    loading ? 'loading' : '',
    noAnimation ? 'no-animation' : ''
  );
  export let input: Input | undefined = undefined;
</script>

{#if input}
  <input
    on:click
    class="btn {classes} {$$props.class}"
    type={input.type || 'button'}
    value={input.value}
    name={input.name}
    {...$$props}
  />
{:else}
  <button
    on:click
    class="btn {classes} {$$props.class}"
    disabled={disabled || loading}
    {...$$props}
  >
    <slot />
  </button>
{/if}