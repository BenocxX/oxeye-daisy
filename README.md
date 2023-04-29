# Oxeye Daisy
A Svelte component librairy using Tailwind + DaisyUI 

## Button
Import the `Button` component:
```svelte
<script lang="ts">
  import { Button } from 'oxeye-daisy';
</script>
```

A simple button:
```svelte
<Button>
  Click me
</Button>
```

To customize it's style, you can follow the [DaisyUI documentation](https://daisyui.com/components/button/). Every attributes is customizable via props. Here's an example where we customize the color, the size and the outline:
```svelte
<Button color="secondary" size="sm" outline>
  Click me
</Button>
```

Here's the possible props to customize the `Button` component:
```svelte
<script lang="ts">
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
</script>
```

You should get the autocomplete for props like `color`, `size`, etc... The types only represents the possible value offered by DaisyUI.

If you want a `input` element of type submit:
```svelte
<!--
export type Input = {
  value: string;
  type?: 'button' | 'submit' | 'reset';
  name?: string;
};
-->
<Button
  input={{ value: 'Click me', type: 'submit', name: 'name' }}
  color="secondary"
  size="sm"
  outline
/>
```
