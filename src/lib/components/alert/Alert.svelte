<script context="module" lang="ts">
  const types = {
    default: {
      class: '',
      path: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      stroke: 'stroke-info'
    },
    info: {
      class: 'alert-info',
      path: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      stroke: 'stroke-current'
    },
    success: {
      class: 'alert-success',
      path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      stroke: 'stroke-current'
    },
    warning: {
      class: 'alert-warning',
      path: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      stroke: 'stroke-current'
    },
    error: {
      class: 'alert-error',
      path: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
      stroke: 'stroke-current'
    },
  };

  export type Type = keyof typeof types;
</script>

<script lang="ts">
  import { getClasses } from '$lib/utils.js';

  export let type: Type = 'default';

  $: classes = getClasses(types[type].class);
</script>

<div class="alert shadow-lg {classes} {$$props.class}">
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 flex-shrink-0 {types[type].stroke}"
      fill="none"
      viewBox="0 0 24 24"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d={types[type].path}
      /></svg
    >
    <span>
      <slot />
    </span>
  </div>
</div>
