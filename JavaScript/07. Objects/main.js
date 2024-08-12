// Object - store various keyed collections (key, value)
// One of JS data types
// Keyed-indexed, can access item using dot notation

let person = {
  firstname: "John",
  lastname: "Doe",
  age: 30,
  isMarried: false,
  address: {
    street: "No 1 street",
    city: "Singapore",
  },
  greet: function () {
    return "Hello!";
  },
};

console.log(person.address.city);
console.log(person.greet());
