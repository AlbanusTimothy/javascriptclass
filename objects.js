let person = {
    "name":"Albas",
    "age":40,
    "address":"embakasi",
    "is_married":false,
    "tech stack":["python","js","Go"]
}

console.log(person)
console.log(typeof(person))
//accessing name
console.log(person.name)
console.log(person.age)
console.log(person["tech stack"])

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))