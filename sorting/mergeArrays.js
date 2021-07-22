// in order to implement merge sort, it's useful to first implement a function responsbile for merging two sorted arrays
// given two arrays which are sorted, this helper function
// should create a new array which is also sorted, and consists of all of
// the elements in the two input arrays
// the function should run in O(n + m) time and
// O(n + m) space and should not modify the parameters passed to it

//Create an empty array, take a look at the smallest values in each input array
// While there are still values we haven't look at..
//if the value in the first array is smaller than the value in the second array
// push the value in the first array into our results
//move on to the next value in the first array
// if the value in the first array is larger than the value in the second array,
//push the value in the second array int our results and mobe on to the next value in the secon array
//once we echaust one array, push in all remaining values from the other array

function mergeSort(arr1, arr2) {
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

  //once we hit the end of one array
  //we merge the elements in the remaining array using another while loop

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

const arr1 = [1, 4, 7, 9];
const arr2 = [2, 3, 10, 11];

mergeSort(arr1, arr2);
