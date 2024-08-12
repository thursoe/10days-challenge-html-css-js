// Function - reusable code block
// function declaration, expression, arrow
// passing arguments
// return
// default


// Function declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!


// Anonymous function expression
let greet2 = function(name) {
  console.log("Hello, " + name + "!");
};

greet2("Bob"); // Output: Hello, Bob!

// Arrow Function
const greet3 = (name) => {
  console.log("Hello, " + name + "!");
};

greet3("David"); // Output: Hello, David!

// Return keyword, Default parameter
function logCompliment(firstname = "Alice") {
  return `You're doing great! ${firstname}`;
}

const result = logCompliment("Bob");

console.log(result);
