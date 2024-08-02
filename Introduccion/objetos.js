//aqui escribimos un arreglo para ver sus limitaciones
const personaArreglo = ['Carlos',27,'correo@correo.com',true,true];

//podemos escribir mucha informacion pero no la podemos organizar
//ahora escribimos un objeto que siempre va un par propiedad valor
const persona = {
    nombre: 'Carlos',  // las propiedades son variables
    edad: 27,
    correo: 'correo@correo.com',
    suscripciones:{
        Web: true,
        Correo: true

    },
    colores : ['azul','verde','rojo'],
    saludo: function() {        //las funciones son metodos
        alert('Hola');
    },
    
};

//console.log(persona);
//console.log(persona.nombre);
//console.log(persona['edad']);

const variable = 'correo';
//const variable = 'suscripciones';
console.log(persona[variable]);

//console.log(persona.suscripciones.Web);

//puedo agregar elementos a mi objeto

//persona.pais = 'Mexico';

//console.log(persona);

//persona.saludo();




