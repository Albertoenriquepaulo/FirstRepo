let nombre = Symbol();
let apellido = Symbol();

let persona = {};
persona.name = 'Alberto Enrique';
persona[nombre] = 'Alberto';
persona[apellido] = 'Paulo';
persona.saldo = 1000;
persona.cliente = 'Premium';

console.log(persona[nombre]);
console.log(persona.name);

// Los simbolos no pueden ser iterados, veamos. No imprimira los Symbols, son como atributos privados
for (let i in persona){
    console.log(`${i}: ${persona[i]}`);
}