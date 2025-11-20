//spread operator -to copy items
let arr1 =[1,2,3]
let arr2 =[...arr1]
console.log(arr2)

//spraed operator- to merge arrays
let a =[10,20,30]
let b =[40,50,60]
let c =[...a,...b]
let d =[...c,70,80,90]
console.log(c)
console.log(d)


//optional chainning
let city ={
    "name":"Nairobi",
    "code":47,
    "sub_counties":{
        "sub1":"Dagoretti",
        "sub2":"Westlands",
        "sub3":"Embakasi",
        "sub-3":{
            "towns":["parklands","kilimani"]
        }
    }
}
// task:output kilimani
console.log(city["sub-counties"]?.["sub-3"]?.["towns"][1]);
