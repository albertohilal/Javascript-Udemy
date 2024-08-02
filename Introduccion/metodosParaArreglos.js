//En Javascript los arreglos son objetos
// por lo tanto tienen propiedades y metodos
//las propiedades son informacion
//los metodos son funciones
const colores = ['Rojo', 'Verde', 'Azul'];
/*
.lenght
PROPIEDAD nos permite conocer la cantidad de elementos que tiene el array
*/

//console.log(colores.length);
/*
.toString()
METODO transforma el array en una cadena de texto
*/
// console.log(colores.toString());
// document.body.innerHTML = colores.toString();

/*
.join() 
METODO nos permite transformar un arreglo en una cadena de texto y separar cada elemento
*/
//console.log(colores.join('-'));

/*
.sort()
METODO nos muestra un arreglo en forma ordenada ascendente
*/
 const letras = ['C', 'A','D','B']
 console.log(letras.sort());

/*
.reverse()
METODO nos muestra un arreglo en forma ordenada descendente
*/
console.log(letras.reverse());

/*
.concat()
METODO nos permite concatenar dos arreglos
*/
const arreglo1 = [1 ,2 ,4 ,5];
const arreglo2 = ['A', 'B', 'C', 'D'];

const arreglo3 = arreglo1.concat(arreglo2);

console.log(arreglo3);

/*
.push()
METODO nos permite agregar un elemento al final del array
*/
colores.push('Amarillo');

console.log(colores);

/*
.pop()
METODO quita un elemento del final del array
*/
colores.pop();
console.log(colores);
//PARTE 2**************************************************
/*
.shift()
METODO elimina el primer elemento y lo guarda
*/
const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes' , 'Sabado', 'Domingo'];
console.log(dias);
// dias.shift();
// console.log(dias);

// const diaEliminado = dias.shift();
// console.log(diaEliminado);

/*
.unshift()
METODO agrega un elemento al principio
*/
dias.unshift('Carlos');
console.log(dias);

/*
.splice()
METODO Nos permite insertar elementos a un arreglo donde especifiquemos
1- Primer parametro posicion donde queremos empezar a insertar elementos
2- Segundo parametro, si queremos eliminar elementos desde la posicion indicada
Resto de parametros, los elementos a insertar
*/

const amigos =['Alejandro','Cesar','Manuel'];
console.log(amigos);
amigos.splice(0,1,'Rafael','Roberto');

console.log(amigos);

/*
.slice()
METODO Nos permite copiar una parte de un arreglo a otro
1- Primer parametro posicion desde donde queremos copita
2- Segundo parametro, hasta antes que el elemento a copiar
*/

const frutas =['Fresas', 'Manzanas', 'Uvas', 'Piña', 'Mango', 'Naranja', 'Melon'];
console.log(frutas);
const frutasPreferidas = frutas.slice(1,5);
console.log(frutasPreferidas);

