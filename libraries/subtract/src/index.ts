export function subtract(...numbers: Array<number>) {
  return numbers.reduce((a, b) => {
    return a - b;
  });
}