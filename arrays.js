
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]; 
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
} 

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  soccer.pop();
  return soccer; 
}

function removeElementFromEndOfArray() {
  var myArrayFour = [1, 2, 3];
  myArrayFour.slice(0, myArrayFour.length-1);
  return myArrayFour;
}