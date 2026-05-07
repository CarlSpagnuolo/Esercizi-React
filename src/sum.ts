export function sum(...numbers: number[]) {
  return numbers.reduce((r, n) => r + n, 0);
}
