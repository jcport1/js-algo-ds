// binary search pseudocode

//write a function that accepts a sorted array and a value
// only working with numbers
// create two variables: left pointer at the start of the array, and a right pointer at the end of the array
// loop over and over
// while we haven't found the element keep looping
// loop only while the left pointer comes before the right pointer
// find the middle

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2); //rounds down
  //Math.floor returns the larger integer less than or equal to a given number
  console.log(start, end, middle);

  while (arr[middle] !== val && start <= end) {
    // adjust sliding window
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    // new middle
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === val) {
    return middle;
  }
  return -1;
}

// function binarySearch(arr, val) {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2); //rounds down

//   while (arr[middle] !== val && start <= end) {
//     if (val < arr[middle]) end = middle - 1;
//     else start = middle + 1;
//     middle = Math.floor((start + end) / 2);
//   }

//   return arr[middle] === val ? middle : -1;
// }

const arr = [1, 3, 6, 8, 11, 14, 18, 21, 25];

binarySearch(arr, 21);
