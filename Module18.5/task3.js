const books = ["To Kill a Mockingbird", "1984", "The Great Gatsby", "Pride and Prejudice", "Moby-Dick"];

// Book to check
const bookToCheck = "JavaScript: The Good Parts";

const hasJavaScriptBook = books.includes(bookToCheck);

if (hasJavaScriptBook) {
    console.log(`The book "${bookToCheck}" is present in the array.`)
} else {
    console.log(`The book "${bookToCheck}" is not present in the array.`);
}
