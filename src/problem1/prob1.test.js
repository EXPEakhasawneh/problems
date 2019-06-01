import { sumArrForLoop, sumArrWhileLoop, sumArrRecur } from './prob1';

const testInputsOutputsObj = {
  positiveNumbers: {
    arr: [1, 2, 3, 4],
    expected: 10,
  },
  negativeNumbers: {
    arr: [-1, -2, -3, -4],
    expected: -10,
  },
  mixtureNumbers: {
    arr: [0, -1, 2, -3, 4],
    expected: 2,
  },
  emptyArr: {
    arr: [],
    expected: 0,
  },
};

test('sum of the numbers in positiveNumbers array using sumArrForLoop function', () => {
  expect(sumArrForLoop(testInputsOutputsObj.positiveNumbers.arr))
    .toBe(testInputsOutputsObj.positiveNumbers.expected);
});

test('sum of the numbers in negativeNumbers array using sumArrForLoop function', () => {
  expect(sumArrForLoop(testInputsOutputsObj.negativeNumbers.arr))
    .toBe(testInputsOutputsObj.negativeNumbers.expected);
});

test('sum of the numbers in mixtureNumbers array using sumArrForLoop function', () => {
  expect(sumArrForLoop(testInputsOutputsObj.mixtureNumbers.arr))
    .toBe(testInputsOutputsObj.mixtureNumbers.expected);
});

test('sum of the numbers in emptyArr array using sumArrForLoop function', () => {
  expect(sumArrForLoop(testInputsOutputsObj.emptyArr.arr))
    .toBe(testInputsOutputsObj.emptyArr.expected);
});

test('sum of the numbers in positiveNumbers array using sumArrWhileLoop function', () => {
  expect(sumArrWhileLoop(testInputsOutputsObj.positiveNumbers.arr))
    .toBe(testInputsOutputsObj.positiveNumbers.expected);
});

test('sum of the numbers in negativeNumbers array using sumArrWhileLoop function', () => {
  expect(sumArrWhileLoop(testInputsOutputsObj.negativeNumbers.arr))
    .toBe(testInputsOutputsObj.negativeNumbers.expected);
});

test('sum of the numbers in mixtureNumbers array using sumArrWhileLoop function', () => {
  expect(sumArrWhileLoop(testInputsOutputsObj.mixtureNumbers.arr))
    .toBe(testInputsOutputsObj.mixtureNumbers.expected);
});

test('sum of the numbers in emptyArr array using sumArrWhileLoop function', () => {
  expect(sumArrWhileLoop(testInputsOutputsObj.emptyArr.arr))
    .toBe(testInputsOutputsObj.emptyArr.expected);
});

test('sum of the numbers in positiveNumbers array using sumArrRecur function', () => {
  expect(sumArrRecur(testInputsOutputsObj.positiveNumbers.arr))
    .toBe(testInputsOutputsObj.positiveNumbers.expected);
});

test('sum of the numbers in negativeNumbers array using sumArrRecur function', () => {
  expect(sumArrRecur(testInputsOutputsObj.negativeNumbers.arr))
    .toBe(testInputsOutputsObj.negativeNumbers.expected);
});

test('sum of the numbers in mixtureNumbers array using sumArrRecur function', () => {
  expect(sumArrRecur(testInputsOutputsObj.mixtureNumbers.arr))
    .toBe(testInputsOutputsObj.mixtureNumbers.expected);
});

test('sum of the numbers in emptyArr array using sumArrRecur function', () => {
  expect(sumArrRecur(testInputsOutputsObj.emptyArr.arr))
    .toBe(testInputsOutputsObj.emptyArr.expected);
});
