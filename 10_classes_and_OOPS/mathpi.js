const decrpiter = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(decrpiter);

const chai = {
    name: 'ginger tea',
    price: 200,
    isAvailable: true,
    orederChai: function () {
        console.log("Cahi nahi bani");
    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}