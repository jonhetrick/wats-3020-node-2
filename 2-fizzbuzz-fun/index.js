/*
Description: a program that counts from 1 to a given integer, printing out fizz if the number is divisble by 3, buzz if it is divisible by 5, and fizzbuzz if it is divisible by both 3 and 5.
Input: Integer
Output: list of numbers, with fizz is divisble by 3, buzz if divisible by 5, and fizzbuzz if divisble by both.
Usage: Node 2-fizzbuzz-fun <integer>
*/

// get input using getargs
const getargs = require('../modules/getargs');
let input = getargs.getIntegerArg();

//function to check if the integer provided to the function is divisble by 3, 5, or 15 and the result if that is true.
function fizzbuzz(n) {
	if (n % 15 == 0) {
		return 'fizzbuzz';
	} else if (n % 3 == 0) {
		return(`fizz`);
	} else if (n % 5 == 0) {
		return(`buzz`);
	} else {
		return(``);
	}
}

// checking if input is an integer. 
if (isNaN(input) || !Number.isInteger(input)) {
	console.log('usage: 2-fizzbuzz-fun <integer>');
} else {
  // for loop to run the loop on every integer from 1 to the input value. 
	for (let i = 1; i <= input; i++) {
		console.log(`${i} ${fizzbuzz(i)}`);
	}
}
