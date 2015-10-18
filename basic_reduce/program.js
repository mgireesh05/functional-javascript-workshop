function countWords(inputWords) {
	return inputWords.reduce(function(input, inputWordCur) {
		input[inputWordCur] = ++input[inputWordCur] || 1;
		return input;
	}, {});
}

module.exports = countWords;
