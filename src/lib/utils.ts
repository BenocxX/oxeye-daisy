export function getClasses(...styles: string[]) {
  return styles.map((style) => style + ' ').join('');
}