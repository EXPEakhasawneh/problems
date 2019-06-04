/* eslint-disable import/prefer-default-export */
export function sumArrForLoop(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
}

export function sumArrWhileLoop(arr) {
  let sum = 0;
  let i = arr.length;
  while (i) {
    sum += arr[i - 1];
    i -= 1;
  }
  return sum;
}

export function sumArrRecur(arr) {
  return arr.length === 0 ? 0 : arr[0] + sumArrRecur(arr.slice(1));
}
//# sourceMappingURL=prob1.js.map