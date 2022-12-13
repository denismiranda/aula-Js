// For in

let person = {
  name: 'Denis',
  age : 19,
  weight : 90.2
}

for(let property in person) {
  console.log(property)
  console.log(person[property])
}