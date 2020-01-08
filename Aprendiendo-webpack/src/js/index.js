import '../css/style.css';

class Cliente {
    constructor(name){
        this.name = name;
    }
}

const cliente = new Cliente('Alberto');
console.log(cliente);