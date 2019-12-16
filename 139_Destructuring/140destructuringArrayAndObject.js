const ciudades = ['Alabama', 'Barcelona', 'Anaco', 'Cumaná'];

const [primeraciudad, segundaciudad] = ciudades;

console.log(primeraciudad);
console.log(segundaciudad);

//Si qusiera extraer el último, Cumaná
const [, , , ultimaCiudad] = ciudades; //tambien se pueden dejar espacios entre las comas
console.log(ultimaCiudad);

const cities = ['Alabama', 'Barcelona', 'Anaco', 'Cumaná', {
    idioma: 'inglés'
}];

const [, , , , idioma] = cities;
console.log(idioma);

//Ejmeplo mas avanzado
const cliente = {
    tipo: 'Premium',
    saldo: 30000,
    datos: {
        nombre: 'Pedro',
        apellido: 'Sanhur',
        residencia: {
            ciudad: 'Barcelona'
        },
    },
    movimientos: [ '12-03-2018', '12-03-2017', '12-03-2016' ]
}

// //Accediendo a varios elementos
// let {
//     tipo,
//     datos: {residencia},
//     movimientos
// } = cliente;

// console.log(residencia);

//Accediendo a un elemento especifico del array dentro del objeto
let {
    tipo,
    datos: {residencia},
    movimientos : [uno, , last]
} = cliente;

console.log(uno, last);