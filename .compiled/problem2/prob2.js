export default function concat(list1, list2) {
  const arr1 = Array.from(list1);
  const arr2 = Array.from(list2);
  const result = [];
  while (arr1.length || arr2.length) {
    if (arr1.length) {
      result.push(arr1.shift());
    }
    if (arr2.length) {
      result.push(arr2.shift());
    }
  }
  return result;
}
//# sourceMappingURL=prob2.js.map