let str = `Count how many times a string has the letter a`;
let aCount = 0;

for (let a of str) {
    if (a === 'a') {
        aCount++;
    }
}

console.log(`The Sentence Has a ${aCount} Time !`);