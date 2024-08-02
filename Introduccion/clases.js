/* 
Las clases son plantillas para poder crear objetos
estas clases nos permiten encapsular codigo
*/
 
/*
Estructura de una clase
Definicion
Propiedades: Las clases pueden contener variables. Dentro de una clase se llaman propiedades
Constructor: Es un metodo especial para inicializar un objeto creado a partir de una clase.
Metodos: La clase puede contener funciones. Dentro de una clase se llaman metodos.
ESTO NOS PERMITE ENCAPSULAR EL CODIGO
*/  


//la primera letra la pones en mayúscula para identificar de que esto es una clase y no  una variable

class Usuario{ 
    tipo = 'usuario'  //propiedad
    constructor(nombre, apellido){  //entre parentesis los valores para crear el objeto 
                                    //estos valores los guardo como propiedades de la clase 
                                    //para guardarlos usamos la palabra this, que hace referencia a la propia clase
        this.nombre = nombre;       //quiero acceder a la clase (this) y a la propiedad de tipo nombre 
                                    //si no existe la va a crear y quiero guardar el valor que me están pasando por nombre    
        this.apellido = apellido;   
        
        console.log('Nuevo usuario registrado!!');
    }
    //usuario va a tener una función o un método que se va a llamar obtener nombre completo 
    obtenerNombreCompleto(){
        console.log('Obteniendo datos de la base de datos...');
        return `${this.nombre} ${this.apellido}`;
    }
}
//Para crear el objeto
//new Usuario('Alberto', 'Hilal');
//Para guardar el objeto
const usuario = new Usuario('Alberto', 'Hilal');
console.log(usuario);
//console.log(usuario.nombre);
console.log(usuario.obtenerNombreCompleto());
// console.log(usuario.apellido);

 const usuario2 = new Usuario('Viviana', 'Rosas');
console.log(usuario2.obtenerNombreCompleto());
// console.log(usuario2.nombre);
// console.log(usuario2.apellido); 