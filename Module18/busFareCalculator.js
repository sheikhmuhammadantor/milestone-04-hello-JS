/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/



let age = 62;
let vara = 800;
let ticket = 0;
let discount;

if (age < 10) {
    console.log("The Ticket Is Free  !");
} else if (age == "student") {
    discount = ((vara * 50) / 100);
    ticket = vara - discount;
} else if (age >= 60) {
    discount = ((vara * 15) / 100);
    ticket = vara - discount;
} else {
    console.log("You don't Have any Discount  ?")
}

console.log("Ticket Price For You : " + ticket);