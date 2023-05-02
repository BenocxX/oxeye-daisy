<script lang="ts">
  export let title: string;
  export let noTopMargin: boolean = false;
</script>

<a
  href="#{title}"
  id={title}
  class:mt-8={!noTopMargin}
  class="mb-4 flex w-max items-center gap-1 text-3xl"
>
  <span class="text-xl font-semibold text-base-content/25">#</span>
  {title}
</a>
