//Forma 1 - medinte palabras export default

// export default () => {
//   return {
//     nombre: "Carlos",
//     correo: "carlos@carlos.com",
//   };
// };

//No vamos a tener mas funciones en este archivo

// Forma 2 - Final del documento

const obtenerUsuario = () => {
  return {
    nombre: "Carlos",
    correo: "carlos@carlos.com",
  };
};

export default obtenerUsuario;
