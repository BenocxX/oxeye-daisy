<script lang="ts">
  export let title: string;
</script>

<a href="#{title}" id={title} class="mb-4 flex items-center gap-1 text-3xl">
  <span class="text-xl text-base-content/25 font-semibold">#</span>
  {title}
</a>
