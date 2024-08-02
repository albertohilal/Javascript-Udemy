/*
Operador Spread
Permite tomar los elementos de un arreglo u objeto y expandirlo en otro sitio
*/
/*
const frutas = ['manzana', 'Pera', 'Piña', 'Melon'];
const comidaFavorita = ['Pizza', 'Sushi', ...frutas];

console.log(comidaFavorita);

const datosLogin = {
    nombre: 'Arturo',
    correo: 'correo@correo.com',
    password: '1234',

}
    */
/*
const datosUsuario ={
    nombre: 'Carlos',
    ...datosLogin,
    edad: 27,
}
    */
/*

const datosUsuario ={
    ...datosLogin,
    nombre: 'Carlos',
    edad: 27,
}

console.log(datosUsuario);
*/

/*
Parametro Rest
Permite que una funcion tenga un numero indefinido de argumentos
Los argumentos extra que encuentre los convertira en un arreglo
*/
/*
const registrarUsuario = (nombre, correo, ...datosAdicionales)=>{
    console.log(nombre, correo, datosAdicionales);
}
registrarUsuario('Carlos', 'carlos@carlos.com');
registrarUsuario('Beto', 'betos@beto.com', 'Argentina', 72);
*/

/*
Destructuracion de objetos
Permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable
*/
const amigos = ['Alejandro', 'Cesar', 'Manuel'];
const [primerAmigo, segundoAmigo,tercerAmigo] = amigos;

console.log(primerAmigo);
const persona ={
    nombre: 'Carlos',
    edad: 27,
    pais: 'Argentina',
}

const {nombre, pais} = persona;

console.log(nombre, pais);