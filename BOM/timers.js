/*
window.setTimeOut()
Nos permite ejecutar una funcion despues de cierto tiempo
*/

//setTimeOut recibe un callback y un tiempo en milisegundos

// setTimeout(() => {
//   console.log("Hola");
// }, 5000);

//MODO 2

// const saludo = () => {
//   console.log("Hola");
// };
// setTimeout(saludo, 5000);

// CON BOTON Iniciar
// const saludo = () => {
//   console.log("Hola");
// };

// const iniciar = () => {
//   console.log("Iniciando timer....");
//   setTimeout(saludo, 5000);
// };

//CON BOTON Iniciar y BOTON Parar

// let id;

// const saludo = () => {
//   console.log("Hola");
// };

// const iniciar = () => {
//   console.log("Iniciando timer....");
//   id = setTimeout(saludo, 5000);
// };

// const parar = () => {
//   console.log("Parando timer....");
//   clearTimeout(id);
// };

/*
setInterval()
Nos permite ejecutar una funcion cada cierto tiempo
*/

// let cuenta = 0;

// setInterval(() => {
//   console.log(cuenta);
//   cuenta++;
// }, 1000);

//CON BOTON Iniciar

// let cuenta = 0;

// const iniciar = () => {
//   console.log(cuenta);
//   cuenta++;
//   setInterval(() => {
//     console.log(cuenta);
//     cuenta++;
//   }, 1000);
// };

//CON BOTON Iniciar y BOTON Parar

let cuenta = 0;
let id;

const iniciar = () => {
  id = setInterval(() => {
    console.log(cuenta);
    cuenta++;
  }, 1000);
};

const parar = () => {
  console.log("Parando timer....");
  clearInterval(id);
  cuenta = 0; // Reset the count to 0 after stopping the timer
};
