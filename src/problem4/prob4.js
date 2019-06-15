/*
  Disclaimer: permutations function sourced from https://gist.github.com/thebopshoobop/a19c25a748529660aa83b83cbdf0d32e
  not tested as Uncle Bob says if you don't trust it then do not use it
  Found out to get all possible permutations of an array using Heap algorithem
*/

const permutations = (array) => {
  if (array.length < 2) {
    // Base case, return single-element array wrapped in another array
    return [array];
  }
  let perms = [];
  for (let index = 0; index < array.length; index++) {
    // Make a fresh copy of the passed array and remove the current element from it
    let rest = array.slice();
    rest.splice(index, 1);

    // Call our function on that sub-array, storing the result: an array of arrays
    let ps = permutations(rest);

    // Add the current element to the beginning of each sub-array and add the new
    // permutation to the output array
    const current = [array[index]];
    for (const p of ps) {
      perms.push(current.concat(p));
    }
  }
  return perms;
};

export default function largestNum(arr) {
  const permutatedArray = permutations(arr);
  let largest = 0;
  for (let i = 0; i < permutatedArray.length; i += 1) {
    if (largest < Number(permutatedArray[i].join(''))) {
      largest = Number(permutatedArray[i].join(''));
    }
  }
  return largest;
}
