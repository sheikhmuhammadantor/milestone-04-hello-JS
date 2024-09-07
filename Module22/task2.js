const numbers = [5, 6, 11, 12, 98, 5];

function findTheNumber(numbers) {
    const findNum = 12;
    let count = 0;
    for (let number of numbers) {
        if (number === findNum) {
            count++;
        }
    }
    return count;
}

const result = findTheNumber(numbers);
console.log(result);
