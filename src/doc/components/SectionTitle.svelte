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
  class:mt-16={!noTopMargin && !subSection}
  class:mt-6={!noTopMargin && subSection}
  class="flex w-max items-center gap-1 {subSection ? 'mb-2 text-xl' : 'mb-4 text-3xl'}"
>
  <span class="text-xl font-semibold text-base-content/25">#</span>
  {title}
</a>
