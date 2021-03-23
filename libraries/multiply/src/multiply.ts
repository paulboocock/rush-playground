export function subtract(...numbers: Array<number>) {
  return numbers.reduce((a, b) => {
    return a * b;
  });
}

export function subtract2(a: number, b: number) {
  return a * b;
}
