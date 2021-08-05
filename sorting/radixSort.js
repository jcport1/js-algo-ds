//getDigit Helper method

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

//Radix Sort Pseudocode
//[x]Define a function that accepts list of numbers
//[x]Figure out how many digits the largest number has
//[x]loop from k = 0 up to this largest number of digits
//For each iteration of the loop:
//Create buckets for each digit (0 to 9)
//place each number in the corresponding bucket based on its kth digit
//Replace our existing array with values in our buckets, starting with 0 and going up to 9
//Return list at the end

function radixSort(nums) {
  //find the max digit count - this will determine how many times we need to loop through the array of nums
  const maxDigitCount = mostDigits(nums);
  //loop through the array by max digit count
  for (let k = 0; k < maxDigitCount; k++) {
    //create buckets 0 - 9 ( 10 in total)
    let digitBuckets = Array.from({ length: 10 }, () => []);
    //loop through each num in the array
    for (let i = 0; i < nums.length; i++) {
      //find digit bucket for num[i] based on kth place
      let digit = getDigit(nums[i], k);
      //push nums[i] into corresponding digit bucket again based on what digit in kth place is
      digitBuckets[digit].push(nums[i]);
    }
    //concat all buckets to create new array so we can repeat process
    nums = [].concat(...digit);
  }
  //return sorted array
  return nums;
}
