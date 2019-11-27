//Clases, 83
class Cliente{
    constructor(name, lastName, credit){
        this.name = name;
        this.lastName = lastName;
        this.credit = credit;
    }
    
    printCredit(){
        return (`${this.name}, tu saldo es ${this.credit}`);
    }

    tipoCliente(){
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

    retirarSaldo (monto){
        return this.credit -= monto;
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

const maria = new Cliente('Maria', 'Perez', 1000);
maria.retirarSaldo(999);
console.log(maria);
console.log(maria.printCredit());
console.log(maria.tipoCliente());
//console.log(maria.bienvenida());
//OJO, los metodos estáticos no requieren crear una nueva instancia, se invocan con el nombre de la clase y no de la instancia
console.log(Cliente.bienvenida());
