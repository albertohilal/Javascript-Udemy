// La herencia de clases nos va a permitir crear clases tomando las propiedades y metodos de otra clase
class Usuario{ 
    constructor(usuario,password){  // va recibir propiedades usuario y password
        this.usuario = usuario;
        this.password = password;
    } 
    obtenerPosts(){
        const posts = ['post1', 'post2']; //simulamos que los obtenemos de una base de datos
        return posts;
    }
}

class Moderador extends Usuario{
    constructor(usuario, password, permisos){
        super(usuario, password);  //copiamos todos los metodos y propiedades de Usuario
        this.permisos = permisos;
    }
    borrarPost(id){
        if(this.permisos.includes('borrar')){
            console.log(`El post con el ${id} ha sido borrado`);
        }else{
            console.log('No tienes los permisos para borrar post!');
        }
    }
    
}

const usuario = new Usuario('carlos', '123');

console.log(usuario.obtenerPosts());

const usuario2 = new Moderador('arturo', '456',['borrar','editar']);
console.log(usuario2.obtenerPosts());
console.log(usuario2.permisos);
usuario2.borrarPost(7);