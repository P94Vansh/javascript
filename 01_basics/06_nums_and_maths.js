let num=10
console.log(num)
console.log(typeof num)
const score=new Number(100)
console.log(typeof score) //object
console.log(score.toString().length)
console.log(score.toFixed(1))
const otherNum=123.8966
console.log(otherNum.toPrecision(5))
const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'))

// ***********Math*************
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.2))
// console.log(Math.min(1,2,3,4))
// console.log(Math.max(1,2,3,4))
console.log(Math.random())
console.log(Math.random()*10+1)
console.log(Math.floor(Math.random()*10)+1)
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)
