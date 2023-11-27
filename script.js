//your JS code here. If required.
// script.js

function manipulateArray(inputArray) {
  return new Promise((resolve) => {
    // Resolve the promise after 3 seconds with the manipulated array
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  });
}

function filterOddNumbers(inputArray) {
  return new Promise((resolve) => {
    // Filter out odd numbers after 1 second
    setTimeout(() => {
      const filteredArray = inputArray.filter((num) => num % 2 !== 0);
      resolve(filteredArray);
    }, 1000);
  });
}

function multiplyEvenNumbers(inputArray) {
  return new Promise((resolve) => {
    // Multiply even numbers by 2 after 2 seconds
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

// Call the functions in sequence using promise chaining
manipulateArray(inputArray)
  .then(filterOddNumbers)
  .then(multiplyEvenNumbers)
  .then((resultArray) => {
    // Update the text of the output div with the final result
    outputDiv.textContent = resultArray.join(", ");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
