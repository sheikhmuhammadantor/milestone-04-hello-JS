const str = 'Xavier experienced extraordinary, noticing the compleX textures of space-X';
console.log(str);

const strArray = str.split('');

for (let x of strArray) {
    if (x === "x") {
        strArray[strArray.indexOf(x)] = 'y';
    } else if (x === "X") {
        strArray[strArray.indexOf(x)] = 'Y';
    }
}

console.log(strArray.join(''));
