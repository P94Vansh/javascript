const animeHeroes=["luffy","naruto","ichigo"]
const marvelHeroes=["thor", "Ironman", "spiderman"]
// animeHeroes.push(marvelHeroes)
// console.log(animeHeroes)
// console.log(animeHeroes[3][1])
const allHeroes=animeHeroes.concat(marvelHeroes)
console.log(allHeroes)
const allNewHeroes=[...animeHeroes,...marvelHeroes]
console.log(allNewHeroes)
const anotherArray=[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray=anotherArray.flat(Infinity)
console.log(realAnotherArray)
console.log(Array.isArray("Vansh"))
console.log(Array.from("Vansh"))
console.log(Array.from({name:"vansh"})) //empty array (interesting)
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
