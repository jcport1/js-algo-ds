// write a recursive function called fib
// which accepts a num and returns the nth number in the Fibonacci sqeuence
// Fibonacci sequence is the sequence of whole numbers 1,1,2,3,4,8 which with 1 and 1, 
// and wher every num thereafter is equal to the sum of the previos two numbers

function fib(n){

    //stop when fib sequence reaches nth numb

    if(n <= 2) return 1;

    //continune summing up fib sequence

    return fib(n-1) + fib(n-2);

    return 
}

fib(5)