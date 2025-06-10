function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 10, 11, 20], 2) === 1);
console.log(binarySearch([1, 2, 3, 10, 11, 20], 20) === 5);
console.log(binarySearch([1, 2, 3, 10, 11, 20], 9) === -1);
