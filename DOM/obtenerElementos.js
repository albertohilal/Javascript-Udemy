/*
getElementById
Nos permite obtener un elemento en base a su atributo id
*/

// const contenedor1 = document.getElementById("contenedor1");

// console.log(contenedor1);

/*
children
Nos permite obtener los elementos hijo
*/

// console.log(contenedor1.children);

/*
parentElement
Nos permite obtener el elemento padre de un elemento
*/

// console.log(contenedor1.parentElement);

/*
getElementsByTagName
Nos permite obtener una coleccion de elementos en base a la etiqueta.
Nota: Devuelve una coleccion HTML. Una coleccion no es un arreglo.
*/

// const divs = document.getElementsByTagName("div");
// console.log(divs);

// console.log(`Tenemos ${divs.length} divs en la pagina`);

/*
getElementsByClassname
Nos permite obtener una coleccion de elementos en base a una clase css.
Nota: Devuelve una coleccion HTML.
*/

const contenedores = document.getElementsByClassName("contenedor");

console.log(contenedores);
