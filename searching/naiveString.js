// Naive String Search

//Suppose you want to count the numer of times a smaller string appears in a longer string
// Straightforward appraoch involves checking pairs of characters individually

//Pseudocode

//define a function that takes in two strings - longer string and pattern string
//loop over the longer string
// if the characters don't match, break out of the inner loop
// if the characters do match, keep going
// if you complete the iner loop and find a match, increment the count of matches
// return the counter

function searchString(long, pattern) {
  let counter = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      console.log(pattern[j], long[i + j]);
      if (pattern[j] !== long[i + j]) {
        console.log("Break!");
        break;
      }
      if (j === pattern.length - 1) {
        counter++;
      }
    }
  }

  console.log(counter);
  return counter;
}

const long = "wowzbtwsobtw";
const pattern = "btw";

searchString(long, pattern);
