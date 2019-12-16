// Un GENERADOR es una función que va retornar un ITERADOR
// Se usa * ante el nombre de la funcon y la palabra "yield" tambie es usada, ver ejemplo

function *crearGenerador(carrito) {
    yield 1;
    yield 'Nombre';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador()

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);


function *nuevoGenerador(carrito){
    for (let index = 0; index < carrito.length; index++) {
        yield element = carrito[index]; 
        //Tambien puede ser la de abajo, es lo mismo
        //yield carrito[index]; 
    }

}

// Mucho mas facil usar el generador que el Iterador
const carrito = ['P1','P2', 'P3','P4'];

const iterator = nuevoGenerador(carrito);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
