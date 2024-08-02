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

fetchPosts()
  .then((posts) => {
    console.log(posts);
  })
  .catch((error) => {
    console.log(error);
  });
