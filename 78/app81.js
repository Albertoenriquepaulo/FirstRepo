//Heredar protoypes a objeto, 81
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    
}

//Prototipo Imprime saldo y nombre
Cliente.prototype.Print = function(){
    CL(this.nombre);
    CL(this.saldo);
}

////Prototipo Imprime saldo y nombre, otra forma
Cliente.prototype.PrintOther = function(){
    return `Nombre: ${this.nombre}. Saldo: ${this.saldo}`;
}
const cliente1 = new Cliente('Alberto', 2000);
cliente1.Print();
CL(cliente1.PrintOther());

//Banca para empresas
function Enterprise(nombre, saldo, tlf, tipo){
    //Se heredan las propiedades de la clase Cliente
    Cliente.call(this, nombre, saldo);
    this.tlf = tlf;
    this.tipo = tipo;

}
//Enterprise Hereda los prototypes de la clase Cliente
Enterprise.prototype = Object.create(Cliente.prototype);

const empresa = new Enterprise('Udemy', 2000000, '04248512934', 'normal');
//cliente1.Print();
CL(empresa);
CL(empresa.Print());
CL(empresa.PrintOther());



//FUNCTIONS
function QSelector(value){
    return document.querySelector(value);
}

function CL(variable){
    console.log(variable);
}
