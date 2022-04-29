/* 
// Modela los siguientes diagramas en objetos de JS -- CASO GITHUB --:
Repo
+name
+author
+language
+numberOfCommits
+stars
+forks
+issues_open
+issues_close
+getTotalIssues()
+getGeneralInfo()
 */

// SOLUCION :

const repo = {
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
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   
   const issue = {
       title: "Problema por consola",
       repositoryNameAssociated : "Playbook",
       status: "Check",
       numberOfComments: "238",
       labels: "NaN",
       author: "juanrdzv",
       dateCreated: "14/04/2022",
       lastUpdate: "18/04/2022",
       getTitleAndAuthor: function(){
        return this.title + " by " + this.author
       },
       getGeneralInfo: function(){
        return `This issue ${this.title} was created by ${this.author}`
       }

   }

   console.log("Nombre del issue:" + issue.title)
   console.log("Titulo y Autor: " + issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())

   const pullRequest = {
    title: "Data de consola",
    repositoryNameAssociated : "Playbook",
    status: "Check",
    branchName : "main",
    dateCreated: "14/04/2022",
    author: "juanrdzv",
    getTitleAndAuthor: function(){
     return this.title + " by " + this.author
    },
    getStatus: function(){
     return `This Pull ${this.title} was update ${this.dateCreated} by ${this.author}`
    }

}

console.log("Nombre del Pull Request:" + pullRequest.title)
console.log("Titulo y Autor: " + pullRequest.getTitleAndAuthor())
console.log(pullRequest.getStatus())