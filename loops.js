
for(i=1;i<=5;i++){
    console.log(i)
}
//looping through an array
let fruits =['apple','banana','mango','orange','peach']
for(i=0;i< fruits.length;i++){
    console.log(fruits[i])
}

//summing numbers using loops
sum=0
for(i=1;i<=10;i++){
    sum+=i
}
console.log(sum)

//looping backwards--display 1-5 in trhe order 5 to 1
for(n=5;n>=1;n--){
    console.group(n)
}

for(i=fruits.length-1;i>=0;i--){
    console.log(fruits[i])
}

//while loops
let x=0
while (x<=5){
    console.log(x)
    x++
}


//nested loops
// nested loops
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(i, j);
  }
}
//multiplication
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j <= 5; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

//break
let numbers =[1,2,3,4,5,6,7,8,9,10]
for ( let i=0;i<numbers.length;i++){
    if(numbers[i]==5) break;
    console.log(i)
}