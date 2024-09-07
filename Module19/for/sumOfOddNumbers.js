

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/



// Subtask-1: Sum of all Odd Number;
let oddSum = 0;

for (let o = 9; o <= 129; o += 2) {
    oddSum += o;
    // console.log(o, oddSum);
}

console.log("Sum Of All Odd Number Is : ", oddSum);



// Subtask-2: Sum of all Even Number;
let evenSum = 0;

for (let e = 52; e <= 85; e += 2) {
    evenSum += e;
    // console.log(e, evenSum);
}

console.log("Sum Of All Even Number Is : ", evenSum);
