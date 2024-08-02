/*
.indexOf()
METODO obtenemos el primer index de un elemento
si no hay elemento retorna -1
*/

const nombres = ['Carlos', 'Rafael', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara'];

//console.log(nombres.indexOf('Estefania'));

/*
.lastIndexOf()
METODO obtenemos el ultimi index de un elemento
si no hay elemento retorna -1
*/

// console.log(nombres.lastIndexOf('Rafael'));

/*
.forEach()
METODO nos permite ejecutar una funcion por cada elemento
*/
// nombres.forEach(()=>{
//     console.log('Hola nombre');
// })

// nombres.forEach((nom)=>{
//     console.log(`Hola ${nom}`); 
    
// });

// nombres.forEach((nom,idx)=>{
//     console.log(`Hola ${nom} ${idx}`); 
    
// });

/*
.find()
METODO nos permite recorrer un arreglo y nos devuelve el PRIMER elemento que retornemos.
*/
//quiero obtener el primer nombre que empiece por la letra E

// nombres.find((nombre)=>{
//     console.log(nombre);
// });
/*
const resultado = nombres.find((nombre)=>{
    console.log(nombre[0]); //cada elemento lo toma como un arreglo entonces toma la primer letra

     });
*/
 
// const resultado = nombres.find((nombre)=>{
//     if(nombre[0] === 'E'){
//         return nombre; 
//     }
        
// });

// console.log(resultado);
/*
.map()
METODO ejecuta una funcion por cada elemento y crea un nuevo elemento
en base a los resultados de esa funcion
La función pasada a map se ejecuta una vez por cada elemento del array.
*/
//Vamos a transformar los nombres a mayusculas
/*
const nombresMayusculas = nombres.map((cualquiera)=>{ //cualquiera es el nombre del parámetro que representa cada elemento del array nombres en cada iteración.
    return cualquiera.toUpperCase();  //toUpperCase() es un método de las cadenas de texto en JavaScript que convierte todos los caracteres de la cadena a mayúsculas

});

console.log(nombresMayusculas);

//Tambien lo puedo escribir asi
const nombresMayusculas2 = nombres.map((cualquiera)=> cualquiera.toUpperCase());

console.log(nombresMayusculas2);
*/

/*
.filter()
METODO ejecuta una funcion por cada elemento
luego crea un arreglo en base a los resultados de esa funcion
pero va devolver los elementos en base a una condicion
*/
/*
const nombres4Letras = nombres.filter((cualquiera)=>{
    if(cualquiera.length ===4){
        return cualquiera;
    }
    
});
console.log(nombres4Letras);

*/
/*
.includes()
METODO nos permite conocer si el arreglo contiene un elemento especificado
*/
/*
console.log(nombres.includes("Carlos"));
console.log(nombres.includes("Julio"));
*/

/*
.every()
METODO ejecuta un condicional sobre cada elemento 
y devuelve true si todos los elementos cumplen esa condicion
*/

const nombres2 = ['Carlos', 'Rafael', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara', 54];
/*
const nombresValidos = nombres2.every((cualquiera)=>{
    if(typeof cualquiera === 'string'){
        return true;
    }else{
        return false;
    }
});


console.log('Todos los nombres son validos?:'+nombresValidos);
*/

/*
.some()
METODO ejecuta un condicional sobre cada elemento 
y devuelve true si alguno de los elementos cumple esa condicion
*/
const nombresValidos = nombres2.some((cualquiera)=>{
    if(typeof cualquiera !== 'string'){
        return true;
    }else{
        return false;
    }
});


console.log('El arreglo es invalido?:'+nombresValidos);

