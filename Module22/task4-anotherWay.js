// Sample input
let sentence = "I am learning Programming to become a programmer";

function longestWord(sentence) {
    // Split the sentence into words
    let words = sentence.split(' ');

    // Use reduce to find the longest word
    let longest = words.reduce((longestWord, currentWord) => {
        return currentWord.length > longestWord.length ? currentWord : longestWord;
    }, "");

    return longest;
}

// Call the function and print the result
console.log(longestWord(sentence));
