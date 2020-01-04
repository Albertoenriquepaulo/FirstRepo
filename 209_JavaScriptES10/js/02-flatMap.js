// Mapea y retorna un nuevo arreglo
const productos = [
    { nombre: 'Producto 1', precio: 20},
    { nombre: 'Producto 2', precio: 30},
    { nombre: 'Producto 3', precio: 40}
];

// Vamos a ver con el simple MAP
const resultado = productos.map( producto => [producto.nombre, producto.precio]);

console.log(productos);

console.log(resultado);
console.log(resultado.flat(1));

const resultado1 = productos.flatMap( producto => [producto.nombre, producto.precio]);
console.log(resultado1);

