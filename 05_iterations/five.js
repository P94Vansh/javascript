const coding=['js','ruby','java','python','cpp']
coding.forEach((item)=>{
    // console.log(item)
})
function printMe(item){
    // console.log(item)
}
coding.forEach(printMe)
coding.forEach((item,index,arr)=>{
    // console.log(item)
    // console.log(index)
    // console.log(arr)
})
const myCoding=[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageFileName)
})