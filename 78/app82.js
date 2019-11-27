//Funcion Object Create, 82
const Cliente = {
    Print: function(){
        return `Hola ${this.nombre}, tu saldo es ${this.saldo}`;
    },
    retirarSaldo: function(retiro){
        return this.saldo -= retiro;
    }

}

//Crando el objeto
const persona = Object.create(Cliente);
persona.nombre = 'Alberto';
persona.saldo = 1000;
persona.lastName = 'Paulo';
persona.retirarSaldo(990);
CL(persona);

//FUNCTIONS
function QSelector(value){
    return document.querySelector(value);
}

function CL(variable){
    console.log(variable);
}
