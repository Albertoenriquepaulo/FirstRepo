//Una función asincrona siempre requerirá un promise
async function leerTodos() {
     //creamos el promise
     const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
     //se procesa cuando la respuesta este hecha
     console.log('HOLA');
     const datos = await respuesta.json();
     return datos;
}

console.log(leerTodos());
leerTodos()
     .then(res => {
          res.forEach(element => {
               console.log(element);
          });
     })
     .catch(error => console.log(error));