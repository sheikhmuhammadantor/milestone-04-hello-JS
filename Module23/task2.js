const names = ['Brahmi', 'robin', 'rabi', 'ron', 'rased'];

function smallestName(names) {
    return names.reduce((smallName, currentName) => smallName.length < currentName.length ? smallName : currentName);
}

console.log(smallestName(names));
