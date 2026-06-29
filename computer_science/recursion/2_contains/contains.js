const contains = function (objectPass, searchValue) {
  let answer = false;
  for (let attribute of Object.values(objectPass)) {
    console.log("this is the attribute: ", attribute, typeof attribute);
    if (typeof attribute === "object" && attribute !== null) {
      answer = contains(attribute, searchValue);
      if (answer) {
        return true;
      }
    }
    if (attribute === searchValue || Number.isNaN(searchValue)) {
      console.log("found!");
      return true;
    }
  }
  return answer;
};

// Do not edit below this line
module.exports = contains;
