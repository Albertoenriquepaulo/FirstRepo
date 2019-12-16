import * as UI from "./interfaz.js";

UI.formBuscar.addEventListener('submit', e => {
     e.preventDefault();
     // Obtener datos del formulario, lo hacemos aqui porque si lo hacemos en la clase Interfaz las obtendremos vacias
     // Se recomienda exportar solo lo estático
     const artista = document.getElementById('artista').value,
           cancion = document.getElementById('cancion').value;
     if (artista === '' || cancion === '') {
          //TODO, no hacer nada, mostrar mensaje de error
          UI.divMensajes.classList.add('error');
          UI.divMensajes.innerHTML = `Error... Todos los campos son obligatorios`;
          setTimeout(() => {
               UI.divMensajes.innerHTML = '';
               UI.divMensajes.remove();
          }, 2000);
          } else {
          //TODO: hacer la consulta a la API
     }

});