export function ucfirst(word: string): string {
  if (word.length) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return word;
}
