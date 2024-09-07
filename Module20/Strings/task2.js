let str = `Count how many times A string has the letter a`;
let aCount = 0;
let countA = 0;

for (let a of str) {
    if (a === 'a') {
        aCount++;
    } else if (a === 'A') {
        countA++;

    }
}

console.log(`The Sentence Has 'a' ${aCount} Time, and 'A' ${countA} Time !`);