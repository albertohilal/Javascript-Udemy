//Creamos una funcion que nos devuelva una promesa
const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = ["Post1", "Post2", "post3"];
      const error = true;
      if (error) {
        reject("Hubo un error al intentar obtener los posts");
      } else {
        resolve(posts);
      }
    }, 2000);
  });
};

//Si queremos que el navegador espere a recibir la respuesta sin hacer nada:
//Como la funcion fetchPosts me devuelve una promesa, creo otra funcion
//que se encarga de mostrar los posts en consola

const mostrarPosts = async () => {
  try {
    const posts = await fetchPosts();
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
};

mostrarPosts();
