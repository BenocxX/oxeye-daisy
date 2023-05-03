<div class="flex gap-8">
  <div class="flex-1 max-w-full">
    <slot />
  </div>
  <div class="w-1/6 hidden lg:block">
    <slot name="sidebar" />
  </div>
</div>