// write a function called power which accepts a base and an exponent
// the function should return the power of the base to the exponent
// function should mimic the functionality of Math.pow() - do not worry about
// neg bases and exponents

function power(base, exponent){

    if(exponent === 0) return 1;

    return base * power(base, exponent-1)

}

power(2,2)