//TODO fill in comment template
/*
Description: a program that takes a string as input and counts how many of each character are in that string.
Input: string 
Output: list of the characters and how many of each. 
Usage: 5-character-count
*/

// get input using getargs
const getargs = require('../modules/getargs');
let input = getargs.getStringArg();

//test that it is a string
if (!input) {
	console.log('usage: 5-character-count <string>');
} else {
	let charCount = {};
	let characters = input.split('');

	for (character of characters) {
		if (charCount[character]) {
			charCount[character]++;
		} else {
			charCount[character] = 1;
		}
	}

	let charArr = [];
	for (let character in charCount) {
		let newElem = { char: character, count: charCount[character] };
		charArr.push(newElem);
	}
	charArr.sort(function(a, b) {
		return a.count - b.count;
	});

	for (let i = 0; i < charArr.length; i++) {
		console.log(`${charArr[i].char}: ${charArr[i].count}`);
	}
}
