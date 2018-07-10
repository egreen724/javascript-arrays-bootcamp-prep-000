
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

function accessElementInArray() {
  var myArray = [1, 2, 3];
  return myArray[1];
}

function destructivelyRemoveElementFromBeginningOfArray() {
  var myArrayTwo = [1, 2, 3];
  myArrayTwo.shift();
  return myArrayTwo;
}

function removeElementFromBeginningOfArray() {
  var myArrayThree = [1, 2, 3];
  myArrayThree = myArrayThree.slice(1);
  return myArrayThree;
}

function destructivelyRemoveElementFromEndOfArray() {
  var soccer = [1, 2, 3];
  soccer.pop();
  return soccer; 
}

function removeElementFromEndOfArray() {
  var myArrayFour = [1, 2, 3];
  myArrayFour.slice(0, myArrayFour.length-1);
  return myArrayFour;
}