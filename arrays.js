let values =[1,2,3,"four","five",false,[true,"six","seven"],8,9]

console.log(values)
console.log(typeof(values))//object
console.log(Array.isArray(valuesz))

// accessing values
console.log(values[3])
// updating values in an array
let names =["bobb","jack","alice"]
names[2]="alba"
console.log(names)//"bob","jack","alba"

// determining the number of values in an array using length
let no_of_names=names.length
console.log(no_of_names)
// adding values at the end
names.push("Anne","jill")
console.log(names)
// adding items at the beginning
names.unshift('jimmy','markk','Leo')
console.log(names)
// remove first item
names.shift()
// remove last item
names.pop
console.log(name)
// splice
//splice(start,delete count,items to add)
// removing elements with splice
let data =[100,200,'five',false,'jane']
data.splice(1,2)//removes 2 items from index 1 ie removes 200 and 'five'

//adding elements without deleting
data.splice(1,0,'three','four')
console.log(data)

//replacing values with splice
data.splice(2,2,'five','true')