const usuario = {
    nombre:"carlos",
    pais: "argentina",
};

switch (usuario.pais) {
    case 'mexico':
        console.log('El usuario es mexicano');
        break;
    case 'españa':
        console.log('El usuario es español');
        break;
    case 'argentina':
        console.log('El usuario es argentino');
        break;
    default:
        console.log('El usuario no es de ninguno de los paises anteriores');
        
}
