import fibonacciArray, { fibonacci } from './prob3';

test('fibonacci method with first two numbers 0 or 1', () => {
  expect(fibonacci(1)).toBe(1);
});

test('fibonacci method', () => {
  expect(fibonacci(10)).toBe(55);
});

test('fibonacciArray of first 10 number', () => {
  expect(fibonacciArray(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
});
//# sourceMappingURL=prob3.test.js.map