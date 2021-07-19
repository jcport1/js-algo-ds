// Selection Sort Pseudocode

//store the first element as the smallet value you've seen so far
//compare this item to the next item in the array until you find a smaller number
//we're saving the index, so we can swap the elemnts in the array
//if a small number is found, designate that smaller number to be the new "minimum" and continue until th end of the array
//if the "minimum" is not the value (index) you initially began with, swap the two values
//Repeat this with the next elemnt until the array is sorted

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //lowest value when we start
    let lowest = i;
    // we want to compare the value of j (which is 1 up from i) with i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        if (arr[j] < arr[lowest]) {
          lowest = j;
        }
      }
      //swap array values
      //condition to prevent unecessary swap
      if (i !== lowest) {
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
      }
    }
    return arr;
  }
}

const arr = [15, 3, 6, 2, 10, 8];

selectionSort(arr);
