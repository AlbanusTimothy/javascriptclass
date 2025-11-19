let my_object = [
    23,
    "Jane",
    560,
    ["Lesson", "Maths", { currency: "KES" }],
    987,
    76,
    "John"
];

// 1. Display "KES"
console.log(my_object[3][2].currency);

// 2. Display 560
console.log(my_object[2]);

// 3. Display "Maths"
console.log(my_object[3][1]);
//4.  Add another key named "amount" and the value is 90
my_object[3][2].amount = 90;
console.log(my_object[3][2]);

//Reverse 987 to 789 without in built method
let num = my_object[4];     // 987
let reversed = Number(num.toString().split('').reverse().join(''));
console.log(reversed);

//change "john" to "jane"
my_object[6] = "Jane";
console.log(my_object[6]);

