const removeFromArray = function(arr, ...removeArr) {
    return arr.filter(val => !removeArr.includes(val))
};
//create a for loop that check if removeArr[n] exists in arr 
// if it exists then remove it by using splice and indexOf() and then decrement the i
// if it doesnt exist then continue
//if its exactly the same then remove the element inside of arr

// Do not edit below this line
module.exports = removeFromArray;
