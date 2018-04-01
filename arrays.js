var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var element = "M&M"

function addElementToBeginningOfArray(chocolateBars, element) {
  return ["element", ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {
  chocolateBars.unshift(element);
  return chocolateBars;
}

function accessElementInArray(chocolateBars) {
  return chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.shift();
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice
}