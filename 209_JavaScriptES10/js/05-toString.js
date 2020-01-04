function sumar(a,b) {
    return a+b;
}

// Retorna en texto el cuerpo de la función
console.log(sumar.toString());

function Automovil(modelo, color) {
    this.modelo = modelo;
    this.color = color;
}

const auto = new Automovil('Camaro', 'Blanco')
console.log(auto.toString());

Automovil.prototype.toString = function autoString() {
    const datos = `Auto: ${this.modelo} y ${this.color}`
    return datos;
}

const auto1 = new Automovil('Camaro', 'Negro')
console.log(auto1.toString());