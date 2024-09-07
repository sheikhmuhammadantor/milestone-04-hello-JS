let sentence = "I am learning Programming to become a programmer";

function longestWord(sentence) {
    let words = sentence.split(' ');

    let longest = words.reduce((longestWord, currentWord, index) => {
        return currentWord.length > longestWord.length ? currentWord : longestWord;
    }, '');

    return longest;
}

const result = longestWord(sentence);
console.log(result);
