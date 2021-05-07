export function capitelizeWord(text: string): string {
  const lowerText = text.toLocaleLowerCase();
  return text.charAt(0).toLocaleUpperCase() + lowerText.slice(1);
}
