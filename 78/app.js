//Proyecto cotiza seguro de Autos 86
class Cliente{
    constructor(name, credit){
        this.name = name;
        this.credit = credit;
    }
    
    printCredit(){
        return (`${this.name}, tu saldo es ${this.credit}`);
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

class Enterprise extends Cliente {
    constructor(name, credit, tlf, tipo){
        //Va hacia el constructor padre
        super(name, credit);
        //Estos no existen en el constructor padre
        this.tlf = tlf;
        this.tipo = tipo;
    }
    static bienvenida(){
        return `Bienvenido al cajero para Empresas`;
    }
}

const maria = new Cliente('Maria', 'Perez', 1000);
const empresa = new Enterprise('AlbertPC', 1000000, 4518758, 'Constructions');
console.log(empresa);
console.log(empresa.printCredit());
console.log(Enterprise.bienvenida());
