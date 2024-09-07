const numbers = [12, 78, 5, 41, 23, 54, 45, 99, 5, 41, 23, 56, 46, 38];
const evenArray = [];

for (let number of numbers) {
    if (number % 2 === 0) {
        evenArray.push(number);
    }
}

console.log('All The Even Number Is :', evenArray.toString());
