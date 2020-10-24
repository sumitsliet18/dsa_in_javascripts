//creating an array of length 0
var numbers = [];
console.log(numbers.length);

// declare an array variable with a set of elements
var numbers = [1,2,3,4,5];
console.log(numbers.length);

// create an array by calling the array constructor
var numbers = new Array();
console.log(numbers.length);

//call the array constructor with a set of elements as arguments to the constructor

var numbers = new Array(1,2,3,4,5);
console.log(numbers.length);

// call the array constructor with a single argument specifying the length of the array
var numbers = new Array(10);
console.log(numbers.length);
// javascript array elements do not have to be of the same type


var objects = [1, "sumit", true, null];
console.log(Array.isArray(objects));
// we can verify that an object is an array by calling the Array.isArray() function
var numbers = 3;
var arr = [7, 4, 1776];
console.log(Array.isArray(numbers));
console.log(Array.isArray(arr));
