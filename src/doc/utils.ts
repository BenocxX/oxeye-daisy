import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-typescript.js';


export type PrismLanguage = 'svelte' | 'javascript' | 'typescript' | 'bash';

export function getPrismLanguage(language: Omit<PrismLanguage, 'svelte'>) {
  switch (language) {
    case 'javascript':
      return Prism.languages.javascript;
    case 'typescript':
      return Prism.languages.typescript;
    case 'bash':
      return Prism.languages.bash;
    default:
      return Prism.languages.javascript;
  }
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getHrefFromString(string: string) {
  return string
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export function getHrefFromCamelCase(string: string) {
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
}
