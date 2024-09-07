let mathematics = 75.25;
let biology = 65.80;
let chemistry = 80.35;
let physics = 35.45;
let bangla = 97.50;

let totalSubject = 5;
let totalMark = (mathematics + biology + chemistry + physics + bangla);

let averageMark = (totalMark / totalSubject).toFixed(1);

console.log(`Average Mark Of All Subject Is : ${averageMark}`)