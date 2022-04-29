/* 
// Modela los siguientes diagramas en objetos de JS -- UBER: --:
*/

// PROFILE SOLUTION:
const user = {
    user: "Juan",
    userName: " Juan Rodriguez",
    age: "26",
    potho: " './images/user-potho.png",
    email: "juanrodv@gmail.co",
    getGeneralInfo: function(){
        return `User: ${this.userName} age: ${this.age}`
      }
}
console.log(user.getGeneralInfo())



// TRAVEL SOLUTION: 
const travel = {
    user: "Juan",
    userName: "Juan rodriguez V.",
    from: "Av.Paseo Real, Col. Coli, Guadalajara, Jalisco, Mexico",
    to: "Loma Gris, Col. El Sol, Guadalajara, Jalisco, Mexico",
    date: "19/04/2022",
    getGeneralPost: function(){
        return `The user ${this.userName} was traveling from: ${this.from} to: ${this.to}`
    }
}
console.log(travel.getGeneralPost())

