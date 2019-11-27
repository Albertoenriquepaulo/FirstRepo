//Types in JScript, 80
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    
}

//Crear un prototype
Cliente.prototype.tipoCliente = function(){
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

//Prototipo Imprime saldo y nombre
Cliente.prototype.Print = function(){
    CL(this.nombre);
    CL(this.saldo);
}

////Prototipo Imprime saldo y nombre, otra forma
Cliente.prototype.PrintOther = function(){
    return `Nombre: ${this.nombre}. Saldo: ${this.saldo}. Tipo de Cliente: ${this.tipoCliente()}`;
}

////Prototipo Retirar Saldo
Cliente.prototype.RetirarSaldo = function(monto){
    return this.saldo -= monto;
}


const cliente1 = new Cliente('Alberto', 2000);
cliente1.Print();
CL(cliente1.PrintOther());
CL(cliente1.RetirarSaldo(20));

//FUNCTIONS
function QSelector(value){
    return document.querySelector(value);
}

function CL(variable){
    console.log(variable);
}