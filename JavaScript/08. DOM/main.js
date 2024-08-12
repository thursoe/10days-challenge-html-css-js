// DOM - Document Object Model
// tree-like structure

// Selecting Element - getElementById, getElementByClassName, querySelector, querySelectorAll
// Modifying Element - textContent, style

document.addEventListener("DOMContentLoaded", () => {
  let myElement = document.querySelector("#myElement");
  myElement.textContent = "Modified!";
  myElement.style.color = "red";
  myElement.style.fontSize = "20px";
  console.dir(myElement);
});
