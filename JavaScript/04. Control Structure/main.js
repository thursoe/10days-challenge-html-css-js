// Conditionals - if, else if, else
// Switch Statements
// Loops - for, while, do while

// if-else
let age = 25;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// switch
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's Monday!");
    break;
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
  default:
    console.log("It's another day.");
}

// for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// do-while
let count2 = 0;

do {
  console.log(count2);
  count2++;
} while (count2 < 5);
