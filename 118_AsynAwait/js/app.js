//Una función asincrona siempre requerirá un promise
async function obtenerCliente() {
     //creamos el promise
     const clientes = new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve('Clientes descargados...');
          }, 5000);

     });
     //error o no
     const error = false;
     if (!error) {
          const respuesta = await clientes;
          return respuesta;
     } else {
          await Promise.reject('Hubo un error...');
     }
}

obtenerCliente()
     .then(res => console.log(res))
     .catch(error => console.log(error));