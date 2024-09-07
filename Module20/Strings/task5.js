let text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`;

let textArray = text.split(' ');
let arrLength = textArray.length;

for (let i = 0; i < textArray.length; i++) {
    textArray[i] = textArray[i][0].toUpperCase() + textArray[i].slice(1)
}

console.log(textArray.join(' '));
