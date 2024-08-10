//Named Imports

// import { nombre, obtenerPosts } from "./namedExports";
// console.log("Mi nombre es " + nombre);
// console.log(obtenerPosts());

// Importra con alias

// import { nombre as nombreImportado, obtenerPosts } from "./namedExports";

// const nombre = "132";
// console.log("Mi nombre es " + nombreImportado);
// console.log(obtenerPosts());

// Namespace imports

// import * as datos from "./namedExports";
// console.log(datos.nombre);
// console.log(datos.obtenerPosts);

//Default Imports, puedo poenr el nombre que quiera

import obtener from "./defaultExport";
console.log(obtener());

//Puedo importar la funcion con el nombre que yo quiera

//Empty Imports
//Carga el codigo sin hacer ningun objeto

import "./emptyExport";

import { correo } from "./emptyExport";

console.log(correo);
