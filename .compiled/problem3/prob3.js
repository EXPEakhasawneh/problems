const result = {
  0: 0,
  1: 1
};

export function fibonacci(number) {
  if (result[number]) {
    return result[number];
  }
  return number === 0 || number === 1 ? number : fibonacci(number - 1) + fibonacci(number - 2);
}

export default function fibonacciArray(num) {
  for (let i = 2; i <= num; i += 1) {
    if (!result[i]) {
      result[i] = fibonacci(i);
    }
  }
  return Object.values(result);
}

// console.log(fibonacciArray(100));
//# sourceMappingURL=prob3.js.map