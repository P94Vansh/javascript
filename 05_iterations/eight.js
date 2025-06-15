const myNums=[1,2,3]
const initialVal=0
// const myTotal=myNums.reduce((accumulator,currentVal)=>{
//     console.log(`accumulator is ${accumulator} and currentVal is ${currentVal}`)
//     return accumulator+currentVal
// },initialVal)
// console.log(myTotal)
const myTotal=myNums.reduce((acc,currentVal)=> acc+currentVal,initialVal)
console.log(myTotal)
const shoppingCart=[
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const cartTotal=shoppingCart.reduce((acc,currentVal)=> acc+currentVal.price,initialVal)
console.log(cartTotal)