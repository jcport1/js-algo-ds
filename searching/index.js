// How do we search?

// Given an array, the simpest way to search for a value is to look
// at every element in the array and check if it's the value we want

const states = [
  "Alaska",
  "Alabama",
  "Arkansas",
  "American Samoa",
  "Arizona",
  "California",
  "Colorado",
  "Connecticut",
  "District of Columbia",
  "Delaware",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Iowa",
  "Idaho",
  "Illinois",
  "Indiana",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Massachusetts",
  "Maryland",
  "Maine",
  "Michigan",
  "Minnesota",
  "Missouri",
  "Mississippi",
  "Montana",
  "North Carolina",
  " North Dakota",
  "Nebraska",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "Nevada",
  "New York",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Virginia",
  "Virgin Islands",
  "Vermont",
  "Washington",
  "Wisconsin",
  "West Virginia",
  "Wyoming",
];

// JS have search
// different search methods on arrays in JS
// indexOf, includes, find, findIndex

states.includes("Alabama"); //true

// Linear Search function

// function accepts an array and a value
//loop through the array and check if the current array element is equal to the value
// if it is, return the index at which the element is found
// if value not found, return -1

const fruits = ["apple", "banana", "pineapple", "cherries"];

function linearSearch(arr, val) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      console.log(i);
      return i;
    }
  }
  console.log("Fruit not found");
  return -1;
}

linearSearch(fruits, "watermelon");
