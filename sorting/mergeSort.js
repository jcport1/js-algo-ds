//Most mergeSort implementations use recursion
//[X]mergeFunction takes in two arrays
//break up the array into havles until you have arrays that are empty or have one element
//use array.slice - go from 0 to middle, then middle to end
//call merge sort again on the halves
//base case: arrays length is less than or equal to 1
//once you have smaller sorted arrays, merge those arrays with other sorted arrays
//until you are back at the full length of the array
//once the array has been merged back togeter, return the merged (and sorted!) array

//mergeSort helper function
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  console.log(results);
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

const arr = [2, 5, 6, 8, 10, 11, 14];

mergeSort(arr);
