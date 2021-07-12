// write a function factorial which accepts  a number and returns the factorial of the number
// a factiral is the product of an integer and all the integers below it


function factorial() {

    if (num === 1) return 1;

    return num * factorial(num-1)

}

factorial(4)