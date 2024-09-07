const string = "I am learning Programming to become a programmer"

function findLargestWord(str) {
    const strArray = str.split(' ');
    let longWord = strArray[0];

    for (let arr of strArray) {
        if (arr.length > longWord.length) {
            longWord = arr;
        }
    }
    return longWord;
}

const result = findLargestWord(string);
console.log(result);
