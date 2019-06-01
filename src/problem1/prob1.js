/* eslint-disable import/prefer-default-export */
export function sumArrForLoop(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
}
