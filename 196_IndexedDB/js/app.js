let DB;

// Selectores de la Interfaz
const form = document.querySelector('form'),
        nombreMascota = document.querySelector('#mascota'),
        nombreCliente = document.querySelector('#cliente'),
        telefono = document.querySelector('#telefono'),
        fecha = document.querySelector('#fecha'),
        hora = document.querySelector('#hora'),
        sintomas = document.querySelector('#sintomas'),
        citas = document.querySelector('#citas'),
        headingAdministra = document.querySelector('#administra');

// Esperar por el DOM DOMMatrixReadOnly, IndexDB requiere que este cargado el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Crear la DB
    let crearDB = window.indexedDB.open('citas', 1);

    // Si hay un error, enviarlo a la consola
    crearDB.onerror = function () {
        console.log('Hubo un error');
    }

    // si todo esta bien mostrar en consola y asignar la DB
    crearDB.onsuccess = function () {
        console.log('Todo listo');
        // Asignar a la base de datos
        DB = crearDB.result;
        console.log(DB);
    }
});