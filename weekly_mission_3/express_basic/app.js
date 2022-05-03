// Usando objetos express
const express = require("express");
// App de express
const app = express();
// Puerto en que vamos a ver nuestra app: Localhost:3000
const port = 3000;

// path inicial, responderá a la url localhost:3000
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Respondiendo texto
// localhost:3000/launchx
app.get("/launchx", (req, res) => {
  res.send("Bienvenidos a launchx");
});

// Regresando un objeto
// localhost:3000/explorersInNode
app.get("explorersInNode", (req, res) => {
  const explorer = {
    name: "Explorer",
    msg: "Hello World",
  };
  res.send(explorer);
});

// Query Params: Recibir parametros por url
// http://localhost:3000/explorer/jorge
// req.params = {"explorerName": "jorge"}
app.get("/explorers/:explorerName", (req, res) => {
  res.send(req.params);
});

// Con esto inicializamos nuestra app
app.listen(port, () => {
  console.log("Example app listening on port " + port);
});