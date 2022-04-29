// 06 - Live 3 semana 2:
 console.log("TOPIC : POO ")

//-------------------------------------------- objeto de js ---------------------------------------------------

const woopa_obj = {
    name:"Woopa",
    mission: "Node JS",
    age: "12",
    color: "pink"
}
console.log(`Esto es un objeto de JavaScript:`)
console.log(woopa_obj)


// ---------------------------------------   Crear una clase   ---------------------------------------------
class Ajolonauta{   // Creamos una clase que podria ser nuestro molde
    constructor(name, mission, age, color){   //Constructor: guardar atributos al crear un objeto
        this.name = name
        this.mission = mission
        this.age = age
        this.color = color
    }
    sayHello(){
        return `Hola Soy un Metodo de ${this.name}`
    }
}


console.log(`Esto es una clase:`)
console.log(Ajolonauta)

const woopa = new Ajolonauta("Woopa", "Node JS", "13", "Pink") // Creamos un objeto instanciado vacio de la clase Ajolonauta. 'INSTANCIAR un objeto'
const woope = new Ajolonauta("woope", "Node Js", "18", "Blue") // A este objeto que proviene de una clase se le conoce como 'Orientacion a Objetos'
// const woopi = new Ajolonauta()

console.log (woopa)
console.log (woope)
// console.log (woopi)
console.log(woopa.sayHello())