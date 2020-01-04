// Llave y valor. nombre es la llave y su valor es Producto 1

const map = new Map([ 
    ['nombre', 'Producto 1'], 
    ['precio', 20] 
]);

// fromEntries permite crear un objeto de una serie de llaves y valores
console.log(map);

const obj = Object.fromEntries(map);

console.log(obj);

// Al convertirlo en objeto ya podemos podemos usar algunos metodos propios de los objetos

delete obj.precio;
console.log(obj);

// Para el map es diferente
map.delete('precio');
console.log(map);

// En algunos casos querremos aplicarle los metodos de objetos a un map y con fromEntries lo podemos hacer