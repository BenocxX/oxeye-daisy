<script context="module" lang="ts">
  const colors = {
    default: {
      link: '',
      variable: 'var(--bc)',
      variableFocus: 'var(--bc)',
    },
    primary: {
      link: 'link-primary',
      variable: 'var(--p)',
      variableFocus: 'var(--pf)',
    },
    secondary: {
      link: 'link-secondary',
      variable: 'var(--s)',
      variableFocus: 'var(--sf)',
    },
    accent: {
      link: 'link-accent',
      variable: 'var(--a)',
      variableFocus: 'var(--af)',
    },
    info: {
      link: 'link-info',
      variable: 'var(--in)',
      variableFocus: 'var(--in)',
    },
    success: {
      link: 'link-success',
      variable: 'var(--su)',
      variableFocus: 'var(--su)',
    },
    warning: {
      link: 'link-warning',
      variable: 'var(--wa)',
      variableFocus: 'var(--wa)',
    },
    error: {
      link: 'link-error',
      variable: 'var(--er)',
      variableFocus: 'var(--er)',
    },
  };

  type Color = keyof typeof colors;
  type Target = '_blank' | '_self' | '_parent' | '_top';
</script>

<script lang="ts">
  import { getClasses } from '$lib/utils.js';
  import { onMount } from 'svelte';
  import { animateScroll } from 'svelte-scrollto-element';

  export let href: string;
  export let color: Color = 'info';
  export let hover: boolean = true;
  export let duration: string = '300ms';
  export let height: string = '0.1rem';
  export let target: Target | undefined = undefined;
  export let blank: boolean = false;
  export let scrollTo:
    | { offset?: number; container?: string }
    | boolean
    | undefined = undefined;

  const offsetDefault = -25;
  const containerDefault = "body";

  let tagId = Math.random().toString(36).slice(2, 9);

  if (blank) {
    target = '_blank';
  }

  $: classes = getClasses(colors[color].link, hover ? 'link-hover' : '');

  onMount(() => {
    const tag = document.querySelector('[data-tag-id="' + tagId + '"]');
    if (!tag) {
      return;
    }

    tag.addEventListener('click', (e) => {
      e.preventDefault();
      if (scrollTo) {
        let offset = offsetDefault;
        let container = containerDefault;
        if (typeof scrollTo !== 'boolean') {
          offset = scrollTo.offset || offsetDefault;
          container = scrollTo.container || containerDefault;
        }

        animateScroll.scrollTo({ element: href, offset, container });
      }
    });
  });
</script>

<a
  {href}
  {target}
  data-tag-id={tagId}
  on:click
  class="{classes} {$$props.class}"
  style="--link-theme: {colors[color].variable}; 
    --link-theme-focus: {colors[color].variableFocus};
    --decoration-duration: {duration};
    --decoration-height: {height};"
>
  <slot />
</a>

<style>
  .link-hover {
    text-decoration: underline var(--decoration-height);
    text-decoration-color: hsl(var(--link-theme) / 0);
    transition: all var(--decoration-duration);
  }

  .link-hover:hover {
    color: hsl(var(--link-theme-focus) / 1) !important;
    text-decoration-color: hsl(var(--link-theme-focus) / 1);
  }
</style>
