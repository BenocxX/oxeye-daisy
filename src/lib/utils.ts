export function getClasses(...styles: (string | undefined | false)[]) {
  return styles.map((style) => {
    if (style) {
      return style + ' ';
    } else {
      return '';
    }
  }).join('');
}
