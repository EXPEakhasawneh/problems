import { sumArrForLoop } from './prob1';

const positiveNumbers = [1, 2, 3, 4];
const negativeNumbers = [-1, -2, -3, -4];
const mixtureNumbers = [0, -1, 2, -3, 4];

test('sum of the numbers in positiveNumbers using a for-loop function', () => {
  expect(sumArrForLoop(positiveNumbers)).toBe(10);
});

test('sum of the numbers negativeNumbers using a for-loop function', () => {
  expect(sumArrForLoop(negativeNumbers)).toBe(-10);
});

test('sum of the numbers mixtureNumbers using a for-loop function', () => {
  expect(sumArrForLoop(mixtureNumbers)).toBe(2);
});
