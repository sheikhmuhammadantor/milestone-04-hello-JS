function odd_even(int) {
    if (int % 2 === 0) {
        return 'Even';
    } else if (int % 2 === 1) {
        return 'Odd';
    }
}

const result = odd_even(5);
console.log(result);