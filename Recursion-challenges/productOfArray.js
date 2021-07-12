// write a function called productOfArray 
//which takes in an array of numbers 
//and returns the product of them all

function productOfArray(arr){

    // base case - if the array empty return 1
    // any sum x 1 is the the original sum
    if(arr.length === 0) return 1;

    return array[0] * productOfArray(arr.slice(1))

}

productOfArray([1,2,3,4,10])

