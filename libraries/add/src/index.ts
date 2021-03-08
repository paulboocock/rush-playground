export function add(...numbers: Array<number>) {
  return numbers.reduce((a, b) => {
    return a + b;
  });
}

export function add2(a: number, b: number) {
  return a + b;
}
