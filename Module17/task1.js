const applePrice = 350;
const bananaPrice = 85;

let appleQuantity = 5;
let bananaQuantity = 4;

let givenMoney = 2500;

let totalApplePrice = (applePrice * appleQuantity) ;
let totalBananaPrice = (bananaPrice * bananaQuantity) ;
6
let totalCost = (totalApplePrice + totalBananaPrice);
let returnAmount = (2500 - totalCost);

console.log(`Total Cost : ${totalCost} BDT`)
console.log(`Given Money : ${givenMoney} BDT`)
console.log(`Return Amount : ${returnAmount} BDT`)