let names = ["Alice", "Charlie", "Alice", "Grace", "Mallory", "Charlie", "Grace"];
let numbers = [12, 78, 34, 45, 78, 23,45, 78, 56, 89, 34];


function noDuplicate (names) {
    const unique = [];
    for (let name of names) {
        if (!unique.includes(name)) {
            unique.push(name);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(names);
console.log(uniqueArray);
