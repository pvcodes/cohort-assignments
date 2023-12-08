// function isAnagram(str1, str2) {
// 	if (str1.length != str2.length) return false;

// 	let hash1 = new Map();
// 	let hash2 = new Map();

// 	for (let i = 0; i < str1.length; i++) {
// 		hash1[str1[i]]++;
// 	}

// 	for (let i = 0; i < str2.length; i++) {
// 		hash2[str2]++;
// 	}

// 	for (const [ch, val] of hash1) {
// 		if (hash2.get(ch) != val) return false;
// 	}
// 	return true;
// }

// // console.log(isAnagram("hello", "world"));

// function countVowels(str) {
// 	str = str.toLowerCase();
// 	let vowels = ['a', 'e', 'i', 'o', 'u'];
// 	let vowels_count = new Map();

// 	for (const vowel of vowels) {
// 		// console.log(vowel);
// 		vowels_count.set(vowel, 0);
// 	}
// 	// console.log(vowels_count);

// 	for (const ch of str) {
// 		if (vowels_count.has(ch)) {
// 			console.log(ch);
// 			vowels_count.set(ch, vowels_count.get(ch) + 1);
// 		}
// 	}
// 	console.log(vowels_count);

// 	let ans = 0;
// 	for (const [vowel, numOfTimes] of vowels_count) {
// 		ans += numOfTimes;
// 	}

// 	return ans;
// }

// console.log(countVowels("hello world"));



// string 

let str = "hello world sdffs dgkls orld dskadsa orl";

console.log(str.length);

console.log(str.lastIndexOf("orl"))
console.log(str.indexOf("orl"))

str = "hello world";
console.log(str.substr(2,7)); // 'llo w'  -> from index [2,7)