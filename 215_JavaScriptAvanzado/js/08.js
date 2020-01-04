/**
 * Composicion,
 * Trata basicamente en escribir una serie de funciones y asignarselas al objeto deseado
 */

const getNombre = (info) => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
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
        getNombre(info)
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
        getNombre(info)
    )
}
    
const cliente = Cliente('Juan');
//No se hace referencia a getNombre, ya que esa es la que está atada al objeto
cliente.mostrarNombre();


const empleado = Empleado('Alberto');
//No se hace referencia a getNombre, ya que esa es la que está atada al objeto
empleado.mostrarNombre();

/**
 * La idea es que se puedan declarar una serie de funciones e irlas componiendo dentro
 * del objeto, por eso se le llama composicion
 * Si se tienen una serie de funciones que cuando se vayan creando los objetos se van
 * agregando las funciones según se requiera
 */
