//TODO fill in comment template
/*
Description: a program that takes a string as input and reverses it using JavaScript string methods.
Input: string 
Output: string reversed
Usage: Node 3-reverse-string <string>
*/

// get input using getargs
const getargs = require('../modules/getargs');
let input = getargs.getStringArg();

//test that it is a string
//check if input is a string.
if (!input) {
	console.log('Node 3-reverse-string <string>');
} else {
	//splits the input string into individual items and then reverses them, followed by joining each item back together.
	console.log(input.split('').reverse().join(''));
}
