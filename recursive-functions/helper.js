

function collectOdds(nums){
    let result = [];

    //use helper method recursion to help define function around
    // result array, so it doesn't reset and values persist

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slic(1))
    }

    helper(arr)
    return result;

}

collectOddValues([1,2,3,4,5,6,7,8,9])