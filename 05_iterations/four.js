//forin loop
const myObj={
    'js':'javascript',
    'cpp':'c plus plus',
    'rb':'ruby',
    'swift':'swift by apple'
}
for(let key in myObj){
    // console.log(key + " "+ myObj[key])
}
const programming=["js",'rb','cpp','swift']
for(const key in programming){
    // console.log(programming[key])
}
const map=new Map()
map.set('rb','ruby')
map.set('py','python')
map.set('js','javascript')
for(const key of map){
    console.log(key)
}
