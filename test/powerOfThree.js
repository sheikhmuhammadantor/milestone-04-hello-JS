var isPowerOfThree = function (n) {
    if (n <= 0) return false;
    let logResult = Math.log(n) / Math.log(3);
    let epsilon = 1e-10;  // A small tolerance value for floating-point comparison
    return Math.abs(logResult - Math.round(logResult)) < epsilon;
};

let a = isPowerOfThree(27);
console.log(a);