//Pivot helper pseudocode

//it will help to accept three arguments: an array, astart index, and an end index
// these can default to 0 and the array length minus 1, respectively)
//Grab the pivot from the start of the array
//Store the current pivot index in a variable - this will keep track of where
//the pivot should end up
//loop through the array from the start until the end
//if the pivot is greater than the current element, increment the pivot index
//variable and then swap the current element with the element at the pivot index
//Swap the starting element (i.e. the pivot) with the pivot idnex
//return the pivot index

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, start, swapIdx);
  console.log(swapIdx);
  return swapIdx;
}

const arr = [28, 11, 3, 5, 48, 17, 3, 45, 39, 3];

const start = 0;

const end = arr.length - 1;

pivot(arr, start, end);
