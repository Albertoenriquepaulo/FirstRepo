import * as UI from "./interfaz.js";
import { API } from "./api.js";



UI.formBuscar.addEventListener('submit', e => {
     e.preventDefault();
     console.log('SUBMIT Pressed...');
     UI.divResultado.innerHTML = '';
     // Obtener datos del formulario, lo hacemos aqui porque si lo hacemos en la clase Interfaz las obtendremos vacias
     // Se recomienda exportar solo lo estático
     const artista = document.getElementById('artista').value,
          cancion = document.getElementById('cancion').value;
     if (artista === '' || cancion === '') {
          // Solo mostrar mensaje de error
          UI.errorMessage('Error... Todos los campos son obligatorios!!!')
     } else {
          // Hacer la consulta a la API
          const api = new API(artista, cancion);
          api.obtenerDatos()
               .then(result => {
                    const resultado = result;
                    console.log(resultado);
                    if (resultado.error === 'No lyrics found' || resultado.lyrics === '') {
                         console.log('No existe coincidencia con los datos de su búsqueda...');
                         UI.errorMessage('No existe coincidencia con los datos de su búsqueda...')
                    } else {
                         UI.divResultado.innerHTML = resultado.lyrics;
                    }
               });
     }

});

