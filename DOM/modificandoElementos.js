/* elemento.innerHTML
Nos permite cambiar el contenido HTML de un elemento
*/
const primeraCaja = document.querySelector(".caja");
console.log(
  primeraCaja.innerHTML
); /*Me dice que dentro de la caja solo tengo texto*/
/*Ahora quiero que cambie el codigo HTML por la palabra Hola!*/

primeraCaja.innerHTML = "<b>Hola!!</b>";

/* elemento.attribute
Nos permite acceder y cambiar atributos del elemento.
*/
primeraCaja.id = "nuevo-id";

/* elemento.setAttribute()
Nos permite agregar o establecer el valor de un atributo del elemento
*/
primeraCaja.setAttribute("class", "caja activa");
primeraCaja.setAttribute("data-id", "123-456-789"); /* atributo personalizado */

/* elemento.style.property
Nos permite cambiar los estilos de un elemento
*/
/* creo una variable y que me busques dentro del contenedor 2
el primer elemento caja */
const contenedor2Caja1 = document.querySelector("#contenedor2 .caja");
console.log(contenedor2Caja1);
contenedor2Caja1.style.background = "#000000";
contenedor2Caja1.style.color = "#ffffff";
contenedor2Caja1.style.textTransform = "uppercase";
