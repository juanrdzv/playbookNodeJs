const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
//    Sobre esta lista, realiza lo siguiente:

// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH:
explorers.forEach(names => console.log(names.name))

// Imprime el stack de cada explorer, usa FOR EACH:
explorers.forEach(names => console.log(names.stack))

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
explorers.map(names => console.log(names.stack[0]))

// Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes):
explorers.filter(names => console.log(`El ${names.name} : `+ names.stack.includes("js")))

// Busca el primer explorer que sea de la CDMX, usa FIND:
explorers.find(names => console.log(`El ${names.name} : `+ names.city.includes("CDMX")))

// Obtén la suma de todos los exercises_completed, usa REDUCE:
const result_of_reduce = explorers.reduce((actual, previo) => {
    return actual + previo.exercises_completed}, 0)
console.log(result_of_reduce)

// Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME:
const areSomeTrue = explorers.some(function (e){
    return e.frontend = true })
console.log( areSomeTrue) 

// Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY:
const areAllTrue = explorers.every((name) => name.missions.onboarding.isFinished === true) 
console.log(areAllTrue)
   
