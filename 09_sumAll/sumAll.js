const sumAll = function(beginning, ending) {
    if (beginning < 0 || ending < 0 || !Number.isInteger(beginning) || !Number.isInteger(ending)) return "ERROR";
    let sum = 0;
    let beginCondition = (beginning >= ending) ? ending : beginning;
    let endCondition = (beginning >= ending) ? beginning : ending;
    for(let i = beginCondition; i <= endCondition; i++){
        sum += i;
    }
    return sum;
};

//create a variable sum = 0;
//create a for loop, initial value is argument 1 and condition is until argument 2
// sum += i;


// Do not edit below this line
module.exports = sumAll;
