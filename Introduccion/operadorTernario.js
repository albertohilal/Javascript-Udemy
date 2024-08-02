/*Operador condicional (ternario)
El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.
Sintaxis
condición ? expr1 : expr2*/
/*
const boleto = 'vip';
let codigoDeAcceso;

if (boleto === 'vip') {
    codigoDeAcceso = 'VIP-123-456';
    console.log(codigoDeAcceso);  // Aquí utilizamos console.log como una función para imprimir el valor en la consola.
}else{
    codigoDeAcceso = 'REGULAR-456-789';
    console.log(codigoDeAcceso); 
}*/
const boleto = 'vip';

const codigoDeAcceso = (boleto === 'vip')? 'VIP-123-456' : 'REGULAR-456-789';
console.log(codigoDeAcceso);
