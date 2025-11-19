//TASK1:COMBINE ARRAYS AND REMOVE THE FIRST ELEMENT
// Combine arr1 and arr2 using .concat()

// Remove first element using .shift()

// Display final combinedArray
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combinedArray = arr1.concat(arr2);
combinedArray.shift();

console.log(combinedArray);

//TASK2:EXTRACTING AN ARRAY AND MODIFYING IT
// Extract subarray from index 2 to 4 using .slice()

// Modify the extracted array using .splice() to replace all items with 'x', 'y', 'z'

// Display both arrays
let sourceArray = [10, 20, 30, 40, 50, 60];

// Extract from index 2 to 4 (slice stops before index 5)
let extractedArray = sourceArray.slice(2, 5);

// Replace all extracted elements with 'x', 'y', 'z'
extractedArray.splice(0, extractedArray.length, 'x', 'y', 'z');

console.log("sourceArray:", sourceArray);
console.log("extractedArray:", extractedArray);
