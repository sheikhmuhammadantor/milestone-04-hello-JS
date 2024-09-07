const binaryStr = '011010010010100101011';
let count = 0;

function count_zero(str) {
    for (let zero of str) {
        if (parseInt(zero) === 0) {
            count++;
        }
    }
    return count;
}

const result = count_zero(binaryStr);
console.log(result);
