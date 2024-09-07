function divMulti(num) {
    if (num % 2 === 0) {
        return num * 2;
    } else if (num % 2 === 1) {
        return num / 2;
    }
}

const result = divMulti(0);
console.log(result);
