import express from "express";

import { router } from "./Rutas";
import { dbConnection } from "./mongo";

// creación de la aplicación de servidor
const app = express();
let Puerto = 3000;

// middlewares
app.use(express.json());

// rutas - endpoints de la API-------------------------
app.use(router);

// aplicación escuchando en Puerto
app.listen(Puerto, function () {
  console.log("Servidor Abierto en el puerto:", Puerto);
});

dbConnection().then(function () {
  console.log("Conectado a MongoDB");
});
