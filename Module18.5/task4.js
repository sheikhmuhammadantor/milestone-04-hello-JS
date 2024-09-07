const fruits = ["Apple", "Banana", "Orange"];           // Array of fruits
const age = 25;                                         // Non-array value (number)
const isStudent = true;                                 // Non-array value (boolean)
const cities = ["New York", "London", "Tokyo"];         // Array of cities
const name = "John Doe";                                // Non-array value (string)
const mixedArray = [42, "Hello", true, ["Nested", "Array"]];  // Array with mixed types

// Check if each variable is an array
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(age));
// console.log(Array.isArray(isStudent));
// console.log(Array.isArray(cities));
// console.log(Array.isArray(name));
// console.log(Array.isArray(mixedArray));

// Print a message to the console indicating whether the variable is an array or not.
if (Array.isArray(fruits)) {
    console.log("'fruits' is an Array.")
} else {
    console.log("'fruits' is not an Array.")
}

// Print a message to the console indicating whether the variable is an array or not.
if (Array.isArray(age)) {
    console.log("'age' is an Array.")
} else {
    console.log("'age' is not an Array.")
}

// Print a message to the console indicating whether the variable is an array or not.
if (Array.isArray(isStudent)) {
    console.log("'isStudent' is an Array.")
} else {
    console.log("'isStudent' is not an Array.")
}

// Print a message to the console indicating whether the variable is an array or not.
if (Array.isArray(cities)) {
    console.log("'cities' is an Array.")
} else {
    console.log("'cities' is not an Array.")
}

// Print a message to the console indicating whether the variable is an array or not.
if (Array.isArray(name)) {
    console.log("'name' is an Array.")
} else {
    console.log("'name' is not an Array.")
}

// Print a message to the console indicating whether the variable is an array or not.
if (Array.isArray(mixedArray)) {
    console.log("'mixedArray' is an Array.")
} else {
    console.log("'mixedArray' is not an Array.")
}
