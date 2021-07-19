// Insertion Sort

//[x]start by picking the second element in the array
//(first element is considered the sorted portion at beginning)
//Now compare the second element with the one before it and swap if necessary
//continue to the next element and if it is in the incorrect order, iterate through the sorted portion
// (i.e. the left side) to place the elemnt in the correct place
//Repeat until the array is sorted
//return the array

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    console.log("current", currentVal);
    console.log("i", i);
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log("j", j);
      arr[j + 1] = arr[j];
      arr[j] = currentVal;
    }
  }
  console.log(arr);
  return arr;
}

const arr = [2, 1, 9, 76, 4];

insertionSort(arr);
