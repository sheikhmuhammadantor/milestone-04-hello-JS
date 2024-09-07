let text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.`;

let str = ['a', 'e', 'i', 'o', 'u'];


for (let a of str) {
    if (text.toLowerCase().includes(a)) {
        console.log(`Find ${a} Vowels`);
        continue;
    } else {
        console.log(`There Is ${a} Vowels Missing !`);
        break;
    }
}
