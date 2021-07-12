// first recursive function

function countDown(num){

    // base case conditional
    if (num <= 0) {
        console.log("All done!");
        // important to return otherwise we'll keep going
        return;
    }

    // different input
    console.log(num);
    num--;
    countDown(num);
}

countDown(10)

// iterative function

// function countDown(num) {
//     for(let i = num; i > 0 ; i--){
//         console.log(i);
//     }
//     console.log("All done!")
// }