<div class="flex gap-8">
  <div class="w-full lg:w-5/6 max-w-full">
    <slot />
  </div>
  <div class="lg:w-1/6 hidden lg:block">
    <slot name="sidebar" />
  </div>
</div>