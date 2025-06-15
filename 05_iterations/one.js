// for
// for (let index = 0; index <=10; index++) {
//     const element =index;
//     if(element==5){
//         console.log("5 is the best number")
//     }
//     console.log(element)
// }
// // console.log(element) not accessible here
// for(let i=1;i<=10;i++){
//     // console.log(`Outer value i is ${i}`)
//     console.log(`Talbe of ${i} is:`)
//     for(let j=1;j<=10;j++){
//         // console.log(`Inner Loop value is ${j}`)
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }
const myHeroes=["luffy","naruto","ichigo"]
for (let index = 0; index < myHeroes.length; index++) {
    const element = myHeroes[index];
    console.log(element)
}
// break and continue
for(let index=1;index<=20;index++){
    if(index==5){
        console.log('5 is detected')
        break;
    }
    console.log(index)
}
for(let index=1;index<=20;index++){
    if(index==5){
        console.log('Detected 5')
        continue
    }
    console.log(`values are ${index} and 5 will not appear in this statement`)
}