//sum of numbers from 1 to 10 using while loop
let num = 1;
let sum = 0;

while (num <= 10) {
  sum += num;
  num++;
}

console.log(sum); 

//nested loops
//A nested loop is a loop inside another loop.
// The outer loop runs first, and for each iteration of the outer loop, the inner loop runs completely.
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log("i:", i, "j:", j);
  }
}
//another example
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log(matrix[row][col]);
  }
}

//break in loops
// break is used to exit a loop immediately, even if the loop condition is still true.
// It works in:
// for loops
// while loops
// do..while loops
// switch statements
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}//When i === 5, the loop stops completely.

// 3. Break inside Nested Loops
// Important:
// break only stops the inner loop, not the outer loop.
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j === 3) break;
    console.log("i:", i, "j:", j);
  }
}

//breaking out of both loops
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j === 3) break outerLoop;
    console.log(i, j);
  }
}

