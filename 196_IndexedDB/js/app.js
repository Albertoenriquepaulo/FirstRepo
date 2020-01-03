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
        mostrarCitas();
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
    
    // Cuando el formulario se envia
    form.addEventListener('submit', agregarDatos);
    function agregarDatos(e) {
        e.preventDefault(); 

        const nuevaCita = {
            mascota: nombreMascota.value,
            cliente: nombreCliente.value,
            telefono: telefono.value,
            fecha: fecha.value,
            hora: hora.value,
            sintomas: sintomas.value
        }

        //console.log(nuevaCita);

        // en indexedDB se utilizan las transacciones
        let transaction = DB.transaction(['citas'], 'readwrite');
        let objectStore = transaction.objectStore('citas');
        let peticion = objectStore.add(nuevaCita);

        console.log(peticion);
        
        // Si la petición fue correcta se dipara el evento onsucces
        peticion.onsuccess = () => {
            form.reset();
        }

        // Cuando la transacción se complete
        transaction.oncomplete = () => {
            console.log('Cita Agregada');
            mostrarCitas();
        }
        
        // Si la transaccion resulta en un error
        transaction.onerror = () => {
            console.log('Hubo un error');
        }
    }

    function mostrarCitas() {
        // limpiar citas anteriores
        while (citas.firstChild) {
            citas.removeChild(citas.firstChild);
        }

        //Como vamos a seleccionar elementos necesitamos un objectStore
        let objectStore = DB.transaction('citas').objectStore('citas');
        //esto retorna una peticion que debemos usar opencursor
        objectStore.openCursor().onsuccess = function (e) {
            // cursor se ubicará en el registro indicado para acceder a los datos
            let cursor = e.target.result;
            // console.log(cursor);

            // Comporbamos que exista un cursor
            if (cursor) {
                let citaHTML = document.createElement('li');
                citaHTML.setAttribute('data-cita-id', cursor.value.key);
                citaHTML.classList.add('list-group-item');
                citaHTML.innerHTML = `
                <p class="font-weight-bold">Mascota: <span class="font-weight-normal">${cursor.value.mascota}</span></p>
                <p class="font-weight-bold">Cliente: <span class="font-weight-normal">${cursor.value.cliente}</span></p>
                <p class="font-weight-bold">Teléfono: <span class="font-weight-normal">${cursor.value.telefono}</span></p>
                <p class="font-weight-bold">Fecha: <span class="font-weight-normal">${cursor.value.fecha}</span></p>
                <p class="font-weight-bold">Hora: <span class="font-weight-normal">${cursor.value.hora}</span></p>
                <p class="font-weight-bold">Sintomas: <span class="font-weight-normal">${cursor.value.sintomas}</span></p>
                `;

                // Boton de borrar
                const botonBorrar = document.createElement('button');
                botonBorrar.classList.add('borrar', 'boton', 'btn-danger');
                botonBorrar.innerHTML = '<span aria-hidden="true">x</span> Borrar';
                botonBorrar.onclick = borrarCita;
                citaHTML.appendChild(botonBorrar);
                citas.appendChild(citaHTML);
                
                //IMPORTANTE por si el cursor tiene mas de un registro y continue iterando
                cursor.continue();

            } else {
                if (!citas.firstChild) {
                    // Cuando no hay registros
                    headingAdministra.textContent = 'Agrega citas para comenzar'
                    let listado = document.createElement('p');
                    listado.classList.add('text-center');
                    listado.textContent = 'No hay registros';
                    citas.appendChild(listado);
                } else {
                    headingAdministra.textContent = 'Administra tus citas'
                }
            }
        }
    }

    function borrarCita(e) {
        let citaID = Number (e.target.parentElement.getAttribute('data-cita-id'));
        // en indexedDB se utilizan las transacciones
        let transaction = DB.transaction(['citas'], 'readwrite');
        let objectStore = transaction.objectStore('citas');
        let peticion = objectStore.delete(citaID);

        transaction.oncomplete = () => {
            e.target.parentElement.parentElement.removeChild( e.target.parentElement);
            console.log(`Se eliminó la cita con el id ${citaID}`);
            
            if (!citas.firstChild) {
                // Cuando no hay registros
                headingAdministra.textContent = 'Agrega citas para comenzar'
                let listado = document.createElement('p');
                listado.classList.add('text-center');
                listado.textContent = 'No hay registros';
                citas.appendChild(listado);
            } else {
                headingAdministra.textContent = 'Administra tus citas'
            }
        }
        
    }
});