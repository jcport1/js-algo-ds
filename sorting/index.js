// many algorithms exist that can sort this array in ascending order
// that is part of the challenge
// some algorithms are better than others
// some are very niche

function sort(arr) {
  return arr;
}

sort([24, 45, 7, 12, 16]);

//JS built-in sorting method
// however, since it doesn't always do what we want
// we can use a compiler function

function numberCompare(num1, num2) {
  return num1 - num2;
}

array = [24, 45, 7, 12, 16];

array.sort(numberCompare);
