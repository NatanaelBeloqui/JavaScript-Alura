function fusaoDeArrays (...arrays) {
    return arrays.flat(Infinity);
}

const arr1 = [1,2];
const arr2 = [3,4];
const arr3 = [5,6];

console.log(fusaoDeArrays(arr1, arr2, arr3));