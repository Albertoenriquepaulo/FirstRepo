/**
 * Composicion,
 * Trata basicamente en escribir una serie de funciones y asignarselas al objeto deseado
 */

const getNombre = (info) => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
    
});

const saveEmail = (info) => ({
    email(email) {
        console.log(`Guardando email en ${info.nombre}`);
        info.email = email;
    }
    
});

const getEmail = (info) => ({
    mostrarEmail() {
        console.log(`Email: ${info.email}`);
    }
});


const getEmpresa = (info) => ({
    mostrarEmpresa() {
        console.log(`Empresa: ${info.empresa}`);
    }
});

const getPuesto = (info) => ({
    mostrarPuesto() {
        console.log(`Puesto: ${info.puesto}`);
    }
});


// Ahora vamos agregar la funcion de arriba dentro de Cliente

function Cliente(nombre, email, empresa) {
    //esto de abajo es como el constructor
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        getNombre(info),
        saveEmail(info),
        getEmail(info),
        getEmpresa(info)
    )
}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        getNombre(info),
        saveEmail(info),
        getEmail(info),
        getPuesto(info)
        
    )
}
    
const cliente = Cliente('Juan');
//No se hace referencia a getNombre, ya que esa es la que está atada al objeto
cliente.mostrarNombre();
cliente.email('juan@email.com');
cliente.mostrarEmail();


const empleado = Empleado('Alberto');
//No se hace referencia a getNombre, ya que esa es la que está atada al objeto
empleado.mostrarNombre();
empleado.email('empleado@empleado.com');
empleado.mostrarEmail();

/**
 * La idea es que se puedan declarar una serie de funciones e irlas componiendo dentro
 * del objeto, por eso se le llama composicion
 * Si se tienen una serie de funciones que cuando se vayan creando los objetos se van
 * agregando las funciones según se requiera
 */


const cliente1 = Cliente('Juan', null, 'Udemy');
cliente1.mostrarNombre();
cliente1.email('juan@email.com');
cliente1.mostrarEmail();
cliente1.mostrarEmpresa();


const empleado1 = Empleado('Alberto', null, 'Programmer');
//No se hace referencia a getNombre, ya que esa es la que está atada al objeto
empleado1.mostrarNombre();
empleado1.email('empleado@empleado.com');
empleado1.mostrarEmail();
empleado1.mostrarPuesto();

// Se concluye que la composición básicamente es escribir una serie de funciones
// y asignarlas al objeto deseado