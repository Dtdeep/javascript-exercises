const leapYears = function(year) {
    const divisibleByFour = year % 4 == 0;
    const isAFourCentury = year % 100 !== 0 || year % 400 == 0;

    if(divisibleByFour && isAFourCentury) return true;
    else return false;

};

// Do not edit below this line
module.exports = leapYears;
