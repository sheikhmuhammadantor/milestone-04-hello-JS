const text = "Write a function to count the number of vowels in a string."
const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(str) {
    const lowStr = str.toLowerCase();
    let count = 0;
    for (let s of lowStr) {
        if (vowels.includes(s)) {
            count++;
        }
    }
    return count;
}

const result = countVowels(text);
console.log(result);
