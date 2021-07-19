// define function called  bubble sort that takes an array
//start looping with variable called i at the end of the array towards the beginning
//start an inner loop with a variable called j from the beinning until i is 1
// if arr[j] is greater than arr[j+1] stwap those two values
// at the end return the sorted array

//working function of bubble sort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

//refactor function to avoid needless comparisons

function bubbleSortNew(arr) {
  //refactoring alows us to loop the full length of array while decrementing
  // value of i
  for (let i = arr.length; i > 0; i--) {
    //reduces our comparisions as i loops through array
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// ES6 version

function bubbleSortE6(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j].arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

const arr = [5, 12, 6, 34, 4, 17, 15, 7, 13, 33, 8];

bubbleSortE6(arr);

//optimized version
// if we don't make any swaps, we're done and need to break out of loop

function bubbleSortOptimized(arr) {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

const arr = [5, 12, 6, 34, 4, 17, 15, 7, 13, 33, 8];

bubbleSort(arr);
