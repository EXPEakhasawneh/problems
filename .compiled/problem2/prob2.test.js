import concat from './prob2';

test('concat two array', () => {
  const toBeObject = {
    arr1: ['a', 'b', 'c'],
    arr2: [1, 2, 3],
    expected: ['a', 1, 'b', 2, 'c', 3]
  };
  expect(concat(toBeObject.arr1, toBeObject.arr2)).toEqual(toBeObject.expected);
});

test('concat two array where length of the second array greater than first one', () => {
  const toBeObject = {
    arr1: ['a', 'b', 'c'],
    arr2: [1, 2, 3, 4, 5],
    expected: ['a', 1, 'b', 2, 'c', 3, 4, 5]
  };
  expect(concat(toBeObject.arr1, toBeObject.arr2)).toEqual(toBeObject.expected);
});

test('concat two array where length of the first array greater than first second', () => {
  const toBeObject = {
    arr1: ['a', 'b', 'c', 'd', 'e'],
    arr2: [1, 2, 3],
    expected: ['a', 1, 'b', 2, 'c', 3, 'd', 'e']
  };
  expect(concat(toBeObject.arr1, toBeObject.arr2)).toEqual(toBeObject.expected);
});

test('concat two array where one of them is empty', () => {
  const toBeObject = {
    arr1: ['a', 'b', 'c'],
    arr2: [],
    expected: ['a', 'b', 'c']
  };
  expect(concat(toBeObject.arr1, toBeObject.arr2)).toEqual(toBeObject.expected);
});
//# sourceMappingURL=prob2.test.js.map