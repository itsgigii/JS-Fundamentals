#!/usr/bin/node

// Define the function that adds two numbers
function add(a, b) {
  return a + b;
}

// Get command line arguments and convert them to integers
const first = parseInt(process.argv[2]);
const second = parseInt(process.argv[3]);

// Print the result of adding them
console.log(add(first, second));
