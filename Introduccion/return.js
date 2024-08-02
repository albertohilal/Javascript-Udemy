/*
//1-Esta funcion hace dos cosas lo cual no es sustentable
const operacion = (tipo,numero1, numero2) => {
    if (tipo==='suma'){
        console.log(numero1 + numero2);
    }else if(tipo==='resta'){
        console.log(numero1 - numero2);

    }
   
   }
   operacion('suma', 100,24);
*/
/*
//2-En este caso
//Primero me muestra el resultado console.log(numero1 + numero2);
//Tambien me esta devolviendo un valor 'Hola' que estoy guardando en la variable
//return devuelve informacion para guardarla dentro de una variable

const operacion = (tipo,numero1, numero2) => {
    if (tipo==='suma'){
        console.log(numero1 + numero2);
    }else if(tipo==='resta'){
        console.log(numero1 - numero2);

    }
    return 'Hola';
   
   }
   const miVariable = operacion('suma', 100,24);
   console.log(miVariable);
*/
/*
//3-En este caso la funcion no se encarga de mostrar en pantalla!!
const operacion = (tipo,numero1, numero2) => {
    let resultado;
    if (tipo==='suma'){
        resultado = numero1 + numero2;
    }else if(tipo==='resta'){
        resultado = numero1 - numero2;

    }
    return resultado;
   }
   const miVariable = operacion('suma', 100,24);
   console.log(miVariable);

*/
   //4-En este caso reduzco y optimizo el codiigo

const operacion = (tipo,numero1, numero2) => {
    if (tipo==='suma'){
        return numero1 + numero2;
    }else if(tipo==='resta'){
        return numero1 - numero2;

    }
   }
   const miVariable = operacion('suma', 100,24);
   console.log(miVariable);

   //OJO!! cuando pongo return lo de abajo ya no se ejecuta
