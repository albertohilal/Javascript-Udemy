/*Las promesas son estructuras que vamos a definir, que nos permiten decirle al navegador
  que espere a que terminemos de hacer una operacion y que cuando terminemos
  le vamos a avisar y responder con los datos
  */
const promesa = new Promise((resolve, reject) => {
  // Accion que se ejecutara
  setTimeout(() => {
    const exito = false;

    if (exito) {
      resolve("La operacion tuvo exito");
    } else {
      reject("La operacion no tuvo exito");
    }
  }, 4000);
});

promesa.then((mensaje) => {
  alert(mensaje);
});

promesa.catch((mensaje) => {
  alert(mensaje);
});
