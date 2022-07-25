//Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

// Setup
const myArray = [];

// Only change code below this line
let i = 0;
while (i < 6) {
    myArray.unshift(i);
    i ++;
}

console.log(myArray)