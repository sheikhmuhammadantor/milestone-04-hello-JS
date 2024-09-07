/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/



for (let i = 2; i <= 100; i++) {
    let sqrtNumber = Math.sqrt(i);

    if (sqrtNumber % 1 === 0) {
        console.log(`Stopped at ${i}, which is a square number.`)
        break;
    }
}