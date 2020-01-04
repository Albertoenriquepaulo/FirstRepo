// 
/**
 * new binding
 * Ya lo conocemos, se llama asi por que hay que usar el parametro new para declarar
 */

function Automovil(modelo, color) {
    this.modelo = modelo;
    this.color = color;
}

const auto = new Automovil('Ford Sierra', 'Blanco');
console.log(auto);