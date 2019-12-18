// Singleton -> Define la creación de un objeto que solo tiene una instancia
//
// en su forma mas sencilla podria ser un Object Literal, al fina cuando este
// se crea, ese objeto tiene ya una instancia, aunque también puede encapsular
// funcionamiento un poco mas avanzado. Por lo cual también se considera una 
// forma de crear el Singleton
//
// Este ejemplo tendrá todas las funciones en una sola instancia y será un Object 
// Literal
//
// OJO -> https://www.pensemosweb.com/patrones-de-diseno-en-javascript-singleton-factory/

const alumnos = {
    // Propiedad para todos los alumnos
    listaAlumnos: [],

    // Obtener un alumno
    get: function (id) {
        console.log(id);
        return this.listaAlumnos[id];
    },

    // Crear un alumno
    crear: function (datos) {
        console.log(datos);
        this.listaAlumnos.push(datos);
    },

    // Listar todos los alumnos
    listado: function () {
        return this.listaAlumnos;
    },
}

const infoAlumno = {
    nombre: 'Juan',
    edad: 20
}

const infoAlumno2 = {
    nombre: 'Alberto',
    edad: 40
}

alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);

const listado = alumnos.listado();
console.log(listado);

const alumno = alumnos.get(1);
console.log(alumno);

// tenemos todos los metodos relacionados a este objeto relacionados en una sola 
// instancia que se almacena en un Object Literal