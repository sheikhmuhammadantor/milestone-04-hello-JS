const theArray = [12, 45, 78, 23, 56, 89, 34, 67, 7];
let sum = 0;

function make_avg(arr, length) {
    // length = arr.length;
    for (let vlo of arr) {
        sum += vlo;
    }
    return (sum / length).toFixed(1);
}

const result = make_avg(theArray, 9);
console.log(result);
