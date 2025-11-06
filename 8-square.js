#!/usr/bin/node

// Get the first command-line argument (as a string)
const input = process.argv[2];

// Convert the input to an integer
const size = parseInt(input);

// If size is not a number, print the error message
if (isNaN(size)) {
  console.log('Missing size');
} else {
  // Use a loop to print 'X' repeated 'size' times on each line
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}
