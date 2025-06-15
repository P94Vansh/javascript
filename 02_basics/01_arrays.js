let myArr=[0,1,2,3,4,5,6]
let myHeroes=["luffy","naruto","ichigo"]
let myArr2=new Array(1,2,3,4)
console.log(myArr[1])
// array methods
myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(9)
myArr.shift()
console.log(myArr.includes(9))
console.log(myArr.indexOf(6))
const newArr=myArr.join()
console.log(myArr)
console.log(newArr)
// slice and splice
console.log("A ",myArr)
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B ",myArr)
const myn2=myArr.splice(1,3)
console.log("C", myArr)
console.log(myn2)