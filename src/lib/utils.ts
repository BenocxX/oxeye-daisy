export function getClasses(...styles: (string | undefined | false)[]) {
  return styles.map((style) => {
    if (style) {
      return style + ' ';
    } else {
      return '';
    }
  }).join('');
}

const voidElements = [
  'area',
  'base',
  'br',
  'col',
  'command',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
];

export function isVoidElement(tag: string) {
  return voidElements.includes(tag);
}

export function excludePropsFromRest($$restProps: SvelteRestProps) {
  const { class: _, ...rest } = $$restProps;
  return rest;
}