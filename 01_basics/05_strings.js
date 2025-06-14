const name="vansh"
const repoCount=10
// console.log(name+repoCount+" Value")
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`) //string interpolation
const gameName=new String('vansh-vg.com')
console.log(gameName)
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.charAt(3))
console.log(gameName.indexOf("vg."))
console.log(gameName.toUpperCase())
console.log(gameName) // original string doesn't change since in js string are immutable 
const newString =gameName.substring(0,4)
console.log(newString)
const anotherString = gameName.slice(-11,4)
console.log(anotherString)
const str="   vansh   "
console.log(str)
console.log(str.trim())
const url="https://vansh.com/vansh%20gambhir"
const urlAfterReplace=url.replace('%20','-')
console.log(urlAfterReplace)
console.log(url.includes('vanshe'))
console.log(gameName.split('-'))