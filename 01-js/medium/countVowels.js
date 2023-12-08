/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
	str = str.toLowerCase();
	let vowels = ['a', 'e', 'i', 'o', 'u'];
	let vowels_count = new Map();

	for (const vowel of vowels) {
		// console.log(vowel);
		vowels_count.set(vowel, 0);
	}
	// console.log(vowels_count);

	for (const ch of str) {
		if (vowels_count.has(ch)) {
			console.log(ch);
			vowels_count.set(ch, vowels_count.get(ch) + 1);
		}
	}
	console.log(vowels_count);

	let ans = 0;
	for (const [vowel, numOfTimes] of vowels_count) {
		ans += numOfTimes;
	}

	return ans;
}

module.exports = countVowels;