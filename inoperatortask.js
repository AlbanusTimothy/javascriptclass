let person = {
  name: "Alba",
  age: 20,
  country: "Kenya"
}

console.log("name" in person)     // true  → because 'name' exists in person
console.log("gender" in person)   // false → because 'gender' is not defined

