<script lang="ts">
  import { getHrefFromString } from "$doc/utils.js";

  export let title: string;
  export let noTopMargin: boolean = false;
  export let subSection: boolean = false
  export let id: string = getHrefFromString(title);
</script>

<a
  href="#{id}"
  id={id}
  class:mt-8={!noTopMargin}
  class="mb-4 flex w-max items-center gap-1 {subSection ? 'text-xl' : 'text-3xl'}"
>
  <span class="text-xl font-semibold text-base-content/25">#</span>
  {title}
</a>
