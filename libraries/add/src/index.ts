export function add(...numbers: Array<number>) {
  return numbers.reduce((a, b) => {
    return a + b;
  });
}