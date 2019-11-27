// Creando objetos,Video 78
//object literal
const client ={
    nombre: 'Alberto',
    saldo: 200,
    tipoCliente: function(){
        let tipo;
        if (this.saldo > 1000) {
            tipo = 'Gold';
        }else if(this.saldo > 500){
            tipo = 'Platinum';
        }else{
            tipo = 'Standard';
        }
        return tipo;
    }
}

CL(client.tipoCliente());

//Metodo alternativo

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function(){
        let tipo;
        if (this.saldo > 1000) {
            tipo = 'Gold';
        }else if(this.saldo > 500){
            tipo = 'Platinum';
        }else{
            tipo = 'Standard';
        }
        return tipo;
    }
}

const person = new Cliente('Alberto', 1200);
CL(person.tipoCliente());

//FUNCTIONS
function QSelector(value){
    return document.querySelector(value);
}

function CL(variable){
    console.log(variable);
}