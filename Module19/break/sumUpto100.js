/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/



let i = 1;
let total = 0;

// for(i; ; i++) {
//     if(total ===100)
//     total += i;
// }

while (true) {
    total += i;

    if (total >= 100) {
        break;
    }

    i++;
}

console.log("The total is:", total);
console.log("The last number added is:", i - 1);