/*
.lenght
PROPIEDAD devuelve el numero de caracteres de una cadena de texto
*/
/*
const texto = "Hola soy Carlos";

console.log(texto.length);
*/

/*
indexOf() lastindexOf()
METODO devuelve el index del primer o ultimo caracter indicado
*/
/*
const texto = "Hola soy Carlos";
console.log(texto.indexOf('H'));
console.log(texto.lastIndexOf('o'));
*/

/*
.slice()
METODO devuelve el fragmento de una cadena de texto
1° Parametro index desde donde queremos cortar
2° Parametro, opcional, indice hasta donde queremos cortar
*/
/*
const texto = "Hola soy Carlos!";

const index = texto.indexOf('s');
const lastIndex = texto.lastIndexOf('s');
console.log(texto.slice(index));
console.log(texto.slice(index, lastIndex+1));
console.log(texto.slice(-8, -1));
*/
/*
.replace()
METODO devuelve una cadena de texto donde reemplaza un valor por otro
1° Parametro - el texto que queremos reemplazar
2° Parametro - el texto que queremos poner
*/
/*
const texto = "Hola soy Carlos!";

console.log(texto.replace('Carlos', 'Alberto'));
*/

/*
.split()
METODO convierte una cadena de texto en arreglo
Tenemos que especificar donde cortar cada elemento
Parametro el carácter que funciona como separador
*/

/*
const texto = "Hola soy Carlos!";

console.log(texto.split(' '));
*/

/*
toUpperCase() toLowercase()
METODO permite crear una cadena de texto en minusculas o mayusculas
*/
const texto = "Hola soy Carlos!";
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
