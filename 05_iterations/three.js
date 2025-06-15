// for of
// ["","",""]
// [{},{},{}]
// const arr=[1,2,3,4,5]
// for (const element of arr) {
//     console.log(element)
// }
// const greetings="Hello Vansh!"
// for (const greet of greetings) {
//     console.log(greet)
// }
const map=new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('fr','france')
map.set('IN','India')
console.log(map)
for (const [key,value] of map) {
    console.log(`value of ${key} is ${value}`)
}
const myObj={
    game1:'ben-10',
    game2:'BGMI'
}// objects are not iterable
for (const element of myObj) {
    console.log(element)
}