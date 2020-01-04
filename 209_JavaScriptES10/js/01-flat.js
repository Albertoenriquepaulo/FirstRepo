const edades = [8,10,9, 11, [13,18, 20, [18,20,21]]];

console.log(edades);


console.log(edades.flat(1)); //1 es lo niveles a aplanar
console.log(edades.flat(2)); 
console.log(edades.flat(Infinity)); //aqui aplana todos los niveles
