
//string to number
let num = "23.5"

let x = Number(num)
let y = parseFloat(num)
let z = parseInt(num)

console.log(num,typeof(num))
console.log(x,typeof(x)) //23.5 number
console.log(y,typeof(y)) //23.5 number
console.log(z,typeof(z)) //23 number

//number to string
let a = 598
let b = String(a)
let c = a.toString()

console.log(a,typeof(a))
console.log(b,typeof(b))
console.log(c,typeof(c))


//type coercion
let value1 = "5"
let value2 = "12"//-> "12"
console.log(value1 / value2) //0.416666
console.log(value1 + value2) //512

let f = "Jane"
let g = "Doe"
console.log(f + g)