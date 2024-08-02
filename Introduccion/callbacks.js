/*Son funciones que podemos pasar como parametros a otra funcion
con el fin de que una funcion pueda ejecutar o llamar otra funcion*/

//Imaginate que instalamos una libreria para conectarnos a una base de datos
//y obtener los post de un usuario y esta libreria nos da una funcion:

//obtenerPostsDeUsuario('carlos', () =>{});

//esta libreria te pide dos valores, el usuario y un callback, que es una funcion
//que dentro de la libreria te va a devolver la informacion


obtenerPostsDeUsuario('carlos', (posts) =>{
    console.log(posts);
});

//Este codigo no funciona porque no tengo ninguna libreria instalada
//para ver una simulacion mirar el video 41 Callbacks