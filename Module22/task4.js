const string = "I am learning Programming to become a programmer"

function findLargestWord(str) {
    const strArray = str.split(' ');
    const lengthArray = [];

    for (let arr of strArray) {
        lengthArray.push(arr.length);
    }
    const large = Math.max(...lengthArray);
    const longestWordIndex = lengthArray.indexOf(large);
    const longestWord = strArray[longestWordIndex]

    return longestWord;
}

const result = findLargestWord(string);
console.log(result);
