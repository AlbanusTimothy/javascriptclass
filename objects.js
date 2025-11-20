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


//optional chainning
let city ={
    "name":"Nairobi",
    "code":47,
    "sub_counties":{
        "sub1":"Dagoretti",
        "sub2":"Westlands",
        "sub3":"Embakasi",
        "sub-3":{
            "towns":["parklands,kilimani"]
        }
    }
}
// task:output kilimani
console.log(city["sub-counties"]["sub-3"].towns[1]);
console.log(city["sub_counties"]["sub-3"](towns[1]))