/*
	📌 Cookies
	Las cookies son pequeños archivos de texto que se guardan en la computadora del usuario.
	Estos archivos o cookies se utilizan para guardar información y que no se pierda al refrescar la página.
	
	Usos:
	- Guardar informacion del usuario que no queremos guardar en la base de datos.
	- Guardar preferencias o configuración del usuario.

	Las cookies se escriben como las variables:
	identificador=valor

	Otro uso de las cookies es cuando un navegador web va a mandar hacer un peticion a un servidor,
	las cookies que pertenecen a esa pagina son enviadas en la petición.
	De esta forma la información se guarda en la computadora del usuario pero el servidor puede acceder a ella.

	Con Javascript podemos, crear, editar y borrar cookies.
*/

/*
	Crear una cookie
	Al crear la cookie podemos tambien especificar cuando expira la cookie.
	Nota: Si no usamos la extension de Live Server no funcionara correctamente.
*/
const crearCookie = () => {
  // document.cookie = "nombre=Carlos";
  // Con expiración:
  // document.cookie = 'nombre=Carlos; SameSite=None; Secure; expires=1 Jan 2023 01:00:00 UTC';
};

const iniciarSesion = () => {
  const usuario = prompt("Usuario:");
  document.cookie = `usuario=${usuario};expires=1 Dec 2024 01:00:00 UTC`;
  alert("Sesión Iniciada");
};

/*
	Leer cookies
*/
const cookies1 = document.cookie;
console.log("cookies1: " + cookies1);

/*
	Forma para obtener el usuario de las cookies.
*/
// Definimos la variable donde guardaremos el usuario
let usuario;

// Transformamos las cookies en un arreglo.
const cookies = document.cookie.split(";");

// Recorremos las cookies.
cookies.forEach((cookie) => {
  // Por cada cookie obtenemos su propiedad.
  const propiedad = cookie.split("=")[0];
  // Si la propiedad es usuario.
  if (propiedad === "usuario") {
    // Tomamos el valor y lo guardamos en la variable.
    usuario = cookie.split("=")[1];
  }
});
// Si el usuario existe, mostramos un mensaje.

if (usuario) {
  console.log("Hola " + usuario);
} else {
  console.log("Por favor inicia sesion");
}

const cerrarSesion = () => {
  document.cookie = `usuario=;expires=1 Jan 1970 01:00:00 UTC`;
  alert("Sesión cerrada");
};
