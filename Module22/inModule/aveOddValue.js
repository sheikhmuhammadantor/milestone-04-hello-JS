let numbers = [12, 45, 78, 23, 56, 89, 34, 67, 7];

function aveOddNumber(numbers) {
    let sum = 0;
    let n = 0;
    for (let number of numbers) {
        if (number % 2 === 1) {
            sum += number;
            n++;
        }
    }
    const ave = (sum / n).toFixed(1);
    // console.log(sum, n);
    return ave;
}

const ave = aveOddNumber(numbers);
console.log(`The Average of the all Odd numbers in the Array Is : ${ave}`);
