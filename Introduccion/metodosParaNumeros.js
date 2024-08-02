/*
.toString()
METODO convierte un numero en una cadena de texto
*/
/*
const numero = 10;
console.log(numero, typeof numero);

const texto = numero.toString();
console.log(texto, typeof texto);
*/

/*
.toFixed()
METODO obtiene un numero con la cantidad de decimales especificado
*/
/*
const numero = 3.1415;
console.log(numero);
console.log(numero.toFixed(2));
console.log(numero.toFixed());
*/

/*
parseInt()
FUNCION transforma un valor a un numero entero
*/
/*
const numero1 = parseInt(prompt('Escribe un numero'));
const numero2 = parseInt(prompt('Escribe un numero'));

console.log(numero1 + numero2);
*/

/*
parseFloat()
FUNCION transforma un valor en un numero con decimales
*/
/*
const numero1 = parseFloat(prompt('Escribe un numero'));
const numero2 = parseFloat(prompt('Escribe un numero'));

console.log(numero1 + numero2);
*/

/*
Math.random()
Genera un numero entre 0 y 1
Math es un objeto por eso se escribe en mayusculas
*/
/*
const numero = Math.random();

console.log(numero);
*/

/*
Math.floor()
Redondea hacia abajo un numero
*/
/*
console.log(Math.floor('10.1'));
console.log(Math.floor('10.99'));
*/
/*
Math.ceil()
Redondea hacia arriba un numero
*/
/*
console.log(Math.ceil('10.1'));
console.log(Math.ceil('10.99'));
*/
/*
Math.round()
Redondea hacia el entero mas cercano
*/

/*
console.log(Math.round('10.1'));
console.log(Math.round('10.99'));
*/

/*
Ejemplo de numeros al azar del 0 al 100
*/

const numero = Math.random();

console.log(Math.floor(numero*101));