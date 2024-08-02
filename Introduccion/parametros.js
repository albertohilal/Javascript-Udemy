/*
const saludo=()=>{
    console.log('Hola, Carlos, !!');
}

saludo();
*/
//Ahora nuestra funcion es dinamica
const saludo=(nombre = 'Amigo')=>{	
    console.log(`Hola, ${nombre}, !!`);
};

// saludo('Carlos');
// saludo('Alex');
// saludo('Cesar');
// saludo();

//Multiples Parametros
  //const operacion = (numero1, numero2) => console.log(numero1 + numero2);
  
   // operacion(2,3);


   const operacion = (tipo,numero1, numero2) => {
    if (tipo==='suma'){
        console.log(numero1 + numero2);
    }else if(tipo==='resta'){
        console.log(numero1 - numero2);

    }
   
   }

   operacion('suma',35,50);
   operacion('resta',35,50);