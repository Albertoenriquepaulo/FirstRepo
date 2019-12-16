let carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3'); //Añadimos el mismo elemento anterior, el Set no lo añade, el size seguirá siendo 4

// Se puede inicializar un Set pasandole datos como si fuera un arreglo
let numeros = new Set([1,2,3,4,5,6,7,3,5,6,2,1]);

console.log(carrito);
console.log(carrito.size);

// Los numeros repetidos no se incluyen
console.log(numeros);

// comprobar que un valor existe en el Set
console.log(carrito.has('Camisa'));
console.log(carrito.has('Pantalon'));

// eliminar elemento del Set
carrito.delete('Camisa');
console.log(carrito);

// se puede iterar, recorrer con un forEach por ejemplo
// Las llaves y el valor del Set es el mismo, es decir, no tiene llave ni valor
carrito.forEach( (element, index) => {
    console.log(`From forEach: ${index}: ${element}`);
    
});

// Convertir un set a Arreglo
const arrayCarrito = [...carrito];
console.log(arrayCarrito);

// Vaciar el set
carrito.clear();
console.log(carrito);

// CONCLUSION
// Si necesitamos llave y valor utilizamos MAP
// Si necesitamos valor utilizamos SET