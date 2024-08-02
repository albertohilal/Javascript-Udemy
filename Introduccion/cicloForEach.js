/*
Ciclo forEach
METODO de los arreglos que usamos para recorrer los elementos
*/
const amigos = ['Alejandro', 'Cesar', 'Manuel'];
amigos.forEach((cualquiera,index)=>{
    console.log(`El amigo # ${index} es ${cualquiera}`)
});

/*
Ciclo for in
Permite recorrer las propiedades de un objeto
*/
/*
const persona = {
    nombre: 'Carlos',
    edad: 27,
    correo: 'carlos@carlos.com',
};

for(propiedad in persona){
    persona[propiedad] = '';
}
console.log(persona);
*/
/*
Ciclo for of
Nos permite recorrer los valores de un objeto iterable.
Podemos recorrer: Arreglos, Cadenas de Texto, Mapas y Listas de Nodos, etc
*/

const etiquetas = document.head.children;
console.log(etiquetas);
/*
for (elemento of etiquetas){
    console.log(elemento);
}
    */

//OTRA FORMA DE HACERLO

[...etiquetas].forEach((elemento)=>{
    console.log(elemento);
});