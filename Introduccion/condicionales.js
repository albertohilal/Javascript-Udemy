/*
const usuario = {
    edad:16 ,
    ticket: true,
};

if(usuario.edad >= 18){
    console.log('El usuario es mayor de 18 años y puede entrar al concierto');
}else{
    console.log('El usuario es menor y no puede entrar al concierto');
}
*/

const usuario = {
    edad: 17,
    ticket: true,
    pais: 'Colombia',       
};

if(usuario.edad >= 18 && usuario.ticket===true){
    console.log('El usuario es mayor de 18 años y TIENE TICKET ENTONCES puede entrar al concierto');
}else{
    console.log('El usuario es MENOR DE EDAD, ENTONCES NO PUEDE ENTRAR')
};