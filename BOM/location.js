//href - Retorna la URL de la pagina actual

// console.log(window.location.href);
console.log(location.href);

//hostname - Retorna el nombre del host de una URL

// console.log(window.location.hostname);
console.log(location.hostname);

//pathname - Retorna la ruta y el nombre de un archivo de una URL
console.log(location.pathname);

//protocol - Retorna el protocolo de una URL

console.log(location.protocol);

const cargarDocumento = () => {
  location.assign("https://www.google.com");
};

// const regresar = () => {
//     history.back();
// };

const irAdelante = () => {
  history.forward();
};
