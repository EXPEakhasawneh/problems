import largestNum from './prob4';

test('Largest number for given given [50, 2, 1, 9] to be 95021', () => {
  expect(largestNum([50, 2, 1, 9])).toBe(95021);
});

test('Largest number for given given [1, 10, 100] to be 110100', () => {
  expect(largestNum([1, 10, 100])).toBe(110100);
});
