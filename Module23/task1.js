const heights = [167, 12, 190, 120, 165, 15, 190, 120, 90, 10, 165, 65, 137];

function lowerNumber(heights) {
    return heights.reduce((lowerNumber, currentNumber) => lowerNumber < currentNumber ? lowerNumber : currentNumber);

}

console.log(lowerNumber(heights));
