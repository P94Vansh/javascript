const tinderUser={}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)
const regularUser={
    email:"someemail@email.com",
    fullName:{
        firstName:"Vansh",
        lastName:"Gambhir"
    }
}
console.log(regularUser.fullName.firstName)
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)
// console.log(obj3)
const obj3={...obj1,...obj2,...obj4}
// console.log(obj3)
const user=[
     {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
// console.log(user[1].email)
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
const course={
    courseName:"JS in hindi",
    price:999,
    instructor:"hitesh sir"
}
course.instructor
const {instructor:ins}=course
// console.log(instructor)
console.log(ins)
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
[
    {},
    {},
    {}
]