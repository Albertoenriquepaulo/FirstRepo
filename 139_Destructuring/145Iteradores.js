function crearIterador(carrito) {
    // Inicializamos el indice
    let i = 0;
    return {
        siguiente: () =>{
            let fin = (i >= carrito.length);
            let valor = !fin ? carrito[i++] : undefined;
            return{
                fin: fin,
                valor: valor,
                i: i
            }
        }
    }
}

const carrito = ['P1','P2', 'P3','P4'];



const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());