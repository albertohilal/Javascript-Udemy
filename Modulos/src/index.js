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

import * as datos from "./namedExports";
console.log(datos.nombre);
console.log(datos.obtenerPosts);
