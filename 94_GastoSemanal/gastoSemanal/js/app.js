//VARIABLES
const presupuestoUsuario = prompt('Indica tu presupuesto semanal');
const form = QSelector('#agregar-gasto');
let cantidadPresupuesto;

//--------------------------CLASES
//Clase de Presupuesto
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }
    //Metodo para ir restando del presupuesto
    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }
        

}

//Clase Interfaz maneja todo lo reacionado con el HTML
class Interfaz {
    //
    insertarPresupuesto(cantidad){
        const presupuestoSpan = QSelector('span#total');
        const restanteSpan = QSelector('span#restante');
        //usamos JS para insertar HTML
        presupuestoSpan.innerHTML = cantidad;//`${cantidad}`;
        restanteSpan.innerHTML = cantidad;//`${cantidad}`;
    }
     
    printMensaje(mensaje, tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }
        divMensaje.appendChild(document.createTextNode(mensaje));
        //Insertar en el DOM despues del H2
        QSelector('.primario').insertBefore(divMensaje, form);

        //Quitar el alert despues de 3seg
        setTimeout(function(){
            //QSelector('.primario .alert').remove(); //esta equivale a la de abajo
            divMensaje.remove();
            form.reset();

        }, 2000)
    }
    //Insertar los gastos a la lista
    agregarGastoListado(nombre, cantidad){
        const gastosListados = QSelector('#gastos ul');

        //Cremos li para agregar los gastos
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        //Insertar el gasto
        li.innerHTML = `
            ${nombre}
            <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>
        `;
        //insertar al HTML
        gastosListados.appendChild(li);
    }
    //Comprueba el presupuesto restante
    presupuestoRestante(cantidad){
        const restante = QSelector('span#restante');
        const presupuestoRestanteUser = cantidadPresupuesto.presupuestoRestante(cantidad);
        //cantidadPresupuesto.restante -= cantidad; 
        restante.innerHTML = presupuestoRestanteUser;
        this.comprobarPresupuesto();
    }
    //cambia de color el presupuesto restante
    comprobarPresupuesto(){
        const pTotal = cantidadPresupuesto.presupuesto;
        const pRestante = cantidadPresupuesto.restante;
        const restante = QSelector('.restante');
        //CL(cantidadPresupuesto);
        if ( pRestante <= (pTotal*.25) ) {
            restante.classList.remove('alert-success', 'alert-warning');
            restante.classList.add('alert-danger');
        }else if( pRestante <= (pTotal*.5) ){
            restante.classList.remove('alert-success', 'alert-danger');
            restante.classList.add('alert-warning');
        }
    }

}

//--------------------------FIN CLASES
//EVENT LISTENERS
document.addEventListener('DOMContentLoaded', function(){
    const ui = new Interfaz();
    if (presupuestoUsuario === null || presupuestoUsuario === '') {
        window.location.reload();
    }else{
        //Instanciamos un presupuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        //Instanciar la clase de Interfaz
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);

    }

});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    //Leer del formulario de Gastos
    const nombreGasto = QSelector('#gasto').value;
    const cantidadGasto = QSelector('#cantidad').value;
    
    //Instanciar la interfaz
    const ui = new Interfaz();
    //Comprobar que los campos no estén vacios
    if (validar(nombreGasto, cantidadGasto)) {
        //GOOD, dos parametros, mensaje y tipo
        //CL('All good');
        ui.printMensaje('Correcto', 'correcto');
        ui.agregarGastoListado(nombreGasto, cantidadGasto);
        ui.presupuestoRestante(cantidadGasto);
    }else{
        //ERROR, dos parametros, mensaje y tipo
        ui.printMensaje('Something wrong', 'error');
    }

    
});


//FUNCIONES
function QSelector(value){
    return document.querySelector(value);
}

function CL(variable){
    console.log(variable);
}

function validar(gasto, cantidad){
    let success = false
    if (gasto != '' && cantidad != '') {
        success = true;
    }
    return success;
}
