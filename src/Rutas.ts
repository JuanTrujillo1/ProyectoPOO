import { response, Router } from "express";
import mongoose from "mongoose";
//import fs from "fs";

export const router = Router();

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    Nombre: String,
    Apellido: String,
    Edad: Number,
  })
);

router.get("/", function (Peticion, Respuesta) {

  //Respuesta.send("Bienvenidos") //Respuesta plana
  Respuesta.json({
    mensaje: "Hola, Bienvenidos...",
  });
});

// obtiene todos los usuarios (lista de usuarios)
router.get("/Usuarios", function (Peticion, Respuesta) {
  //console.log(Peticion.params.Usuarios);

  User.find().then(function (usuarios) {
    Respuesta.json({
      data: usuarios,
    });
  });
});

// crea un nuevo usuario
router.post("/", function (Peticion, Respuesta) {
  //fs.writeFileSync('./data.json', JSON.stringify(Respuesta.body));

  const user = new User(Peticion.body);

  user.save().then(function () {
   Respuesta.json({
    mensaje: "usuario creado, Bienvenido",
    });
  });
});

// obtiene un usuario específico por el "id"
router.get("/:id", function (Peticion, Respuesta) {
  console.log(Peticion.params.id);

  Respuesta.json({
    mensaje: "Hola desde la ruta id",
  });
});

// actualiza un usuario existente
router.put("/:id", function (Peticion, Respuesta) {
  console.log(Peticion.params.id);

  Respuesta.json({
    mensaje: "Hola desde el endpoint PUT",
  });
});

router.delete("/:id", function (Peticion, Respuesta) {
  console.log(Peticion.params.id);

  Respuesta.json({
    mensaje: "Hola desde el endpoint DELETE",
  });
});
