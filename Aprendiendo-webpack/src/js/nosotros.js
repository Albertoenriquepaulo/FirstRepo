import '../css/style.scss';
// si queremos importar bootstrap o material fundación o material design se hace de 
// esta forma escrita arriba, con import

class Cliente {
    constructor(name) {
        this.name = name;
    }
}

const cliente = new Cliente('Alberto');
console.log(cliente);

console.log('From nosotros.JS');