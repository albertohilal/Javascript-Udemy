/*
class Usuario{
    constructor(nombre, correo){
        this.nombre = nombre;
        this.correo = correo;
    }
    // creo un metodo para borrar el usuario
    borrarUsuario(id_usuario){
        console.log(`El usuario con el id: ${id_usuario} ha sido borrado de la base de datos`);
    }

}

const usuario = new Usuario('Carlos', 'carlos@carlos.com');

console.log(usuario);

usuario.borrarUsuario(1);
*/
// para poder borrar el usuario tuve que instanciar primero el usuario
//si quiero borrar el usuario sin instanciar primero tenemos los metodos estaticos

class Usuario{
    constructor(nombre, correo){
        this.nombre = nombre;
        this.correo = correo;
    }
    // creo un metodo para borrar el usuario
    static borrarUsuario(id_usuario){
        console.log(`El usuario con el id: ${id_usuario} ha sido borrado de la base de datos`);
    }
    //tambien puedo acceder a propiedades
    static registrados = 1000;


}
//queremos acceder a la funcion que forma parte de la clase Usuario, 
//entonces lo llamamos 

Usuario.borrarUsuario(1);
//Tenemos un metodo que esta encapsulado dentro de la clase Usuario

console.log(Usuario.registrados);