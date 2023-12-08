/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
	if (str1.length != str2.length) return false;

	let hash1 = new Array(26, 0);
	let hash2 = new Array(26, 0);

  

	for (let i = 0; i < str1.length; i++) {
		hash1[str1[i]]++;
	}

	for (let i = 0; i < str2.length; i++) {
		hash2[str2[i]]++;
	}

	for (let i = 0; i < 26; i++) {
		if (hash1[i] != hash2[i]) return false;
	}
	return true;
}

module.exports = isAnagram;
