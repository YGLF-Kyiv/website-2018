export function isInBrowser() {
  return typeof window !== 'undefined';
}

export function replaceSpaces(str) {
  return str.replace(/ /, '-');
}

export function getAnchorName(arr) {
  // ['anna luise', 'jones'] => `anna-luise-jones`
  return arr.map(el => replaceSpaces(el)).join('-');
}
