const person = { name: 'alice' }
const members = [person]

person.name = 'ankit'
console.log(members[0]?.name) 