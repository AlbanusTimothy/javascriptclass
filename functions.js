let a = 12
let b =10
let c =a+b
console.log(c)
//use functions
function add_numbers(){
    let a = 10
    let b = 10
    return a+b
}
sum = add_numbers()
console.log(sum)

// parameters and arguments
function add_numbers(x,y){
    return x+y
}
sum1 = add_numbers(30,70)
sum2 = add_numbers(45,78)
console.log(sum1)
console.log(sum2)

let number = Number(prompt("Enter a number:"));

function check_even(x) {
    let result;

    if (x % 2 == 0) {
        result = "even";
    } else {
        result = "odd";
    }

    return result;
}

let final = check_even(number);
console.log(final);

