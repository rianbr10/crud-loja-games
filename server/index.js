const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost", 
  user: "root", 
  password: "",
  database: "crudgames",
})

app.listen(3001, ()=>{
  console.log("Servidor rodando na porta 3001");
})