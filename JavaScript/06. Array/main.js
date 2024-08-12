// Array - stores a collection of items
// Zero-indexed, can access item using bracket notation
// Length
// methods - push, pop, shift, unshift, forEach, map

const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); // Output: apple
console.log(fruits.length); // Output: 3

fruits.push("grape");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "orange"]

fruits.shift();
console.log(fruits); // Output: ["banana", "orange"]

fruits.unshift("kiwi");
console.log(fruits); // Output: ["kiwi", "banana", "orange"]

fruits.forEach(function (fruit) {
  console.log(fruit);
});

const fruitLengths = fruits.map((fruit) => fruit.length);
console.log(fruitLengths); // Output: [4, 6, 6]
