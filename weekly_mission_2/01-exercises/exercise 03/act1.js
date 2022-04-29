const repo = [ {
    name: "LaunchX",
    author: "juanrdzv",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
]
   //    Sobre esta lista, realiza lo siguiente:

// Imprime el nombre (propiedad name) del autor del Repo, usa FOR EACH:
repo.forEach(names => console.log(names.author))

// Imprime el numero de Commits del repositorio, usa FOR EACH:
repo.forEach(names => console.log(names.numberOfCommits))

// Obtén el lenguaje que tenga en su repositorio con "javascript", usa FILTER (para validar un elemento en un lista se usa el método includes):
repo.filter(names => console.log(`El repositorio ${names.name} usa Js ? : `+ names.language.includes("JavaScript")))
