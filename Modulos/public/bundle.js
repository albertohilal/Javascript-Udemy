'use strict';

//Forma 1 - medinte palabras export default

// export default () => {
//   return {
//     nombre: "Carlos",
//     correo: "carlos@carlos.com",
//   };
// };

//No vamos a tener mas funciones en este archivo

// Forma 2 - Final del documento

const obtenerUsuario = () => {
  return {
    nombre: "Carlos",
    correo: "carlos@carlos.com",
  };
};

console.log("Soy codigo que se ejecuta desde el archivo emptyExport.js");

const correo = "alberto@alberto.com";

//Named Imports

console.log(obtenerUsuario());

console.log(correo);
