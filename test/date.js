let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);

let weekDay = newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(newDate);