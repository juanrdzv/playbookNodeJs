/* 
// Modela los siguientes diagramas en objetos de JS -- FACEBOOK: --:
*/

// USER SOLUTION:
const user = {
    user: "Juan",
    userName: " Juan Rodriguez V.",
    age: "26",
    potho: " './images/user-potho.png",
    email: "juanrodv@gmail.co",
    getGeneralInfo: function(){
        return `Facebook: ${this.userName} 
age: ${this.age}
email: ${this.email}`
      }
}
console.log(user.getGeneralInfo())



// POST SOLUTION: 
const post = {
    user: "Juan",
    userName: "Juan rodriguez V.",
    post: "Hoy es un gran dia para empezar",
    lastPostDate: "19/04/2022",
    getGeneralPost: function(){
        return `${this.post} was posted: ${this.lastPostDate} by: ${this.userName}`
    }
}
console.log(post.getGeneralPost())

// BIOGRAPHY SOLUTION: 
const bio = {
    user: "Juan",
    userName: " juan_rdgzv",
    age: "26",
    email: "juanrodv@gmail.co",
    linkedIn: "juanrdgzV",
    birthday: "19/01/1996",
    getGeneralInfo: function(){
    return`${this.userName} was born ${this.birthday}`
    }
}
console.log(bio.getGeneralInfo())