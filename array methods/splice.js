// removing items
// array.splice(start, deleteCount)

let fruits = ["apple", "banana", "mango", "orange"];
fruits.splice(1, 2);   
console.log(fruits);//["apple", "orange"]

// adding items
// array.splice(start, 0, item1, item2, ...)
// nb delete count is 0 so othing is deleted
let fruits2 = ["apple", "banana", "mango"];
fruits2.splice(1, 0, "kiwi", "pear");
console.log(fruits2);//["apple", "kiwi", "pear", "banana", "mango"]

// replacing items
// array.splice(startIndex, deleteCount, newItem)

let colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow");
console.log(colors);//["red", "yellow", "blue"]

// removing everything from an index
// array.splice(start)

let nums = [1, 2, 3, 4, 5];
nums.splice(2);  
console.log(nums);//[1, 2]
// Everything after index 2 is removed

