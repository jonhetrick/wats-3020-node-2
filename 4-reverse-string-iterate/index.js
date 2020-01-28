//TODO fill in comment template
/*
Description: a program that takes a string as input and reverses it by iterating through the string, character by character.
Input: string 
Output: reversed string 
Usage: 4-reverse-string-iterate <string>
*/

// get input using getargs
const getargs = require('../modules/getargs');
let input = getargs.getStringArg();

function reverseWithFullIteration(str) {
	let result = '';
	for (let element of str) {
        result = element + result;
	}
	return result;
}

// function reverseWithHalfIteration(str) {
// 	// STRETCH TODO write a function that reverses the string but only iterates over half of the input string.
// }

//test that it is a string
if (!input) {
	// usage statement
	console.log('usage: 4-reverse-string-iterate');
} else {
	// use functions to reverse string
	console.log('result with full iteration', reverseWithFullIteration(input));

	// STRETCH TODO output the result of your reverseWithHalfIteration function
}
