// script.js

function manipulateArray(inputArray) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  });
}

function filterOddNumbers(inputArray) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredArray = inputArray.filter((num) => num % 2 === 0);
      resolve(filteredArray);
    }, 1000);
  });
}

function multiplyEvenNumbers(inputArray) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedArray = inputArray.map((num) =>
        num % 2 === 0 ? num * 2 : num
      );
      resolve(multipliedArray);
    }, 2000);
  });
}

// Initial array
const inputArray = [1, 2, 3, 4];

// Get the output div
const outputDiv = document.getElementById("output");

// Function to handle the final result and update the output div
function updateOutput(resultArray) {
  // Update the text of the output div with the final result
  outputDiv.textContent = resultArray.join(", ");
}

// Call the functions in sequence using promise chaining
manipulateArray(inputArray)
  .then(filterOddNumbers)
  .then(multiplyEvenNumbers)
  .then(updateOutput) // Call the function to handle the final result
  .catch((error) => {
    console.error("Error:", error);
  });
