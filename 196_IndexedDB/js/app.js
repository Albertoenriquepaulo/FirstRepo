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
        // console.log('Todo listo');
        // Asignar a la base de datos
        DB = crearDB.result;
        // console.log(DB);
    }

    // Este metodo solo corre una vez, es ideal para crear el Schema
    crearDB.onupgradeneeded = function (e) {
        // El evento es la misma DB, por eso debemos pasarle 'e'
        let db = e.target.result;
        // definir el object store, toma 2 parametros el nombre de la DB y segundo las opciones
        // keyPath es el indice de la base de datos
        let objectStore = db.createObjectStore('citas', { keyPath: 'key', autoIncrement: true});

        //Crear los indices de la DB, createIndex : 3 parametros, nombre, keyPath y opciones
        objectStore.createIndex('mascota', 'mascota', { unique: false });
        objectStore.createIndex('cliente', 'cliente', { unique: false });
        objectStore.createIndex('telefono', 'telefono', { unique: false });
        objectStore.createIndex('fecha', 'fecha', { unique: false });
        objectStore.createIndex('hora', 'hora', { unique: false });
        objectStore.createIndex('sintomas', 'sintomas', { unique: false });

        console.log('DB created and ready...!!!');
    }
});