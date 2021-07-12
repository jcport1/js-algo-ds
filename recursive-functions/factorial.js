// iterative solution

function factorial(num){
    let total = 1;

    for(let i = num; i > 1; i--){
        total *= i
    }

    return total;
}

// recursive solution

function factorialRec(num) {
    //end point - base case
    if (num === 1) return 1;
    //different input
    return num * factorialRec(num-1)
}

factorialRec(5);


