const repeatString = function(stringW, repeatNo) {
    if(repeatNo < 0){
        return "ERROR";
    }
    let stringFinal = "";
    for(let i = 0; i < repeatNo; i++){
        stringFinal += stringW;
    }
    return stringFinal;

};

// a for loop that repeats n times. concatonate the string by itself by loop time

// Do not edit below this line
module.exports = repeatString;
