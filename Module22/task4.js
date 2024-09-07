const sentences = "I am learning Programming to become a programmer";

function longestWord(sentences) {
    const strArray = sentences.split(' ');
    return strArray.reduce((longWord, currentWord) => longWord.length > currentWord.length ? longWord : currentWord);
}

console.log(longestWord(sentences));