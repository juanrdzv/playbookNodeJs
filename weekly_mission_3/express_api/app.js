// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

// HTTP METHODS
app.get("/v1/explorers", (req, res) => {
    console.log(`API Explorers GET ALL requests  ${new Date()}`)
    const explorer1 = { id: 1, name: "Juan 1" }
    const explorer2 = { id: 2, name: "Juan 2" }
    const explorer3 = { id: 3, name: "Juan 3" }
    const explorer4 = { id: 4, name: "Juan 4" }
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
  });
//   app.get("/v1/explorers/:id", (req, res) => {
//     console.log("API Explorers GET request " + new Date());
//     console.log("Getting explorer with id " + req.params.id);
//     const explorer = { id: 1, name: "Juan" };
//     res.status(200).json(explorer);
//   });
  
//   app.post("/v1/explorers", (req, res) => {
//     console.log("API Explorers POST request " + new Date());
//     const requestBody = req.body; // Parámetros de un cliente
//     res.status(201).json({ message: "Created" });
//   });
  
//   app.put("/v1/explorers/:id", (req, res) => {
//     console.log("API Explorers PUT request " + new Date());
//     console.log("Update explorer with id " + req.params.id);
//     const requestBody = req.body; // Parámetros de un cliente
//     res.status(200).json({ message: "Updated!" });
//   });
  
//   app.delete("/v1/explorers/:id", (req, res) => {
//     console.log("API Explorers DELETE request " + new Date());
//     console.log("Delete explorer with id " + req.params.id);
//     res.status(200).json({ message: "Deleted!" });
//   });
  
//   // Con esto inicializamos esta app
//   app.listen(port, () => {
//     console.log("Example app listening on port " + port);
//   });