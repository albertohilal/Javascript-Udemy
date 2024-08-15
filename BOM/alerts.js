/*
Alerta
Para informarle al usuario de algo
*/
// window.alert("Hola usuario");

// alert("Hola usuario");

/*
Ventana de confirmacion
una ventana donde el usuario puede aceptar o cancelar
Retorna verdadero o falso de la respuesta del usuario
*/

// const ingresar = () => {
//   const accesoPermitido = confirm("¿Sos mayor de edad?");
//   if (accesoPermitido) {
//     alert("Bienvenido");
//   } else {
//     alert("No puedes ingresar");
//   }
// };

/*
 Ventana con input
 Una ventana donde el usuario puede introducir un valor
 Retorna una cadena de texto con la respuesta del usuario
 */

const saludo = () => {
  const nombre = prompt("¿Cual es tu nombre?");
  alert(`Hola ${nombre}`);
};
