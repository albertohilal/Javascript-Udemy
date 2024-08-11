console.log(
  `La ventana del navegador mide ${window.innerWidth} pixels de ancho`
);
console.log(
  `La ventana del navegador mide ${window.innerHeight} pixels de alto`
);

/*
window.open()
Nos permite abrir ventanas del navegador
Es posible que el navegador te pida permisos para abrir una nueva ventana
1° parametro: Direccion de la nueva ventana
2° parametro: Nombre de la ventana
3° parametro: Cadena de texto de opciones
Nos devuelve un objeto para acceder a la ventana
*/

//const abrirVentana = () => {
//   window.open(
//     "https://google.com",
//     "Mi nueva ventana",
//     "width=500, height=500"
//   );
// };

//Puedo abrir una ventana y escribir en ella

let ventana;

const abrirVentana = () => {
  ventana = window.open("", "Mi nueva ventana", "width=500, height=500");
  ventana.document.write("<h1>Hola. Escribiendo en la nueva ventana!</h1>");
};

const cerrarVentana = () => {
  ventana.close;
};

/*
Screen Object
Representa la pantalla del usuario*/

console.log("Ancho de pantalla:", window.screen.width);
console.log("Alto de pantalla:", window.screen.height);

console.log(
  "Ancho de pantalla sin barra de Windows:",
  window.screen.availWidth
);
console.log(
  "Alto de pantalla sin barra de Windows:",
  window.screen.availHeight
);
