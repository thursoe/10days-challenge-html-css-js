// JS can only execute one task at a time

// Asynchronous

// Promises are a way to represent
// the eventual completion (or failure) of an asynchronous operation
// and its resulting value.

// - three states: pending, fulfilled, or rejected
// - fulfilled, its then() method is called with the resolved value.
// - rejected, its catch() method is called with the reason for rejection
// can chain multiple then() methods

// Async/Await

function doTask3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Reject: Task 3");
    }, 2000);
  });
}

async function doAsynTask3() {
  try {
    const result = await doTask3();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

console.log("Task 1");
// console.log(
//   doTask3().then((result) => {
//     console.log(result);
//   }).catch((error)=>{
//     console.log(error);
//   })
// );
doAsynTask3();
console.log("Task 2");
