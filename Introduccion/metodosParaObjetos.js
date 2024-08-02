const usuario = {
    nombre : 'Carlos',
    edad : 27,
    amigos : ['Alejandro', 'Cesar', 'Manuel'],
    saludo : ()=>{
        console.log('Hola!');
    }
};

/* Metodos propios
Los objetos pueden tener metodos personalizados
*/
usuario.saludo();

/*
Object.keys()
Nos devuelve un arreglo con las llaves del objeto
*/

const resultados = Object.keys(usuario);

console.log(resultados);

/*
Object.values()
Nos devuelve un arreglo con los valores del objeto
*/

const resul = Object.values(usuario);

console.log(resul);

/*
Object.entries()
Nos devuelve un arreglo con las parejas de clave y valor del objeto
*/

const parejas = Object.entries(usuario);

console.log(parejas);

console.log(`El objeto tiene ${parejas.length} propiedades`);
