const client = {
    name: 'Alberto',
    type: 'Premium'
}


// let {name, type} = client;
// console.log(name);
// console.log(type);

// let name, type;
// ({name, type} = client);
// console.log(name);
// console.log(type);

let name = 'Alberto', type = 'Gold';
({name, type} = client);
console.log(name);
console.log(type);


const cliente = {
    tipo: 'Premium',
    nombre: 'Antonio',
    datos: {
        ubicacion: {
            ciudad: 'Barcelona',
            pais: 'Vzla'
        },
        cuenta:{
            desde: '10-12-2017',
            saldo: 4000
        }
    }
}

// let {datos: {ubicacion}} = cliente;
// console.log(ubicacion);

// let {tipo, nombre, datos} = cliente;
// console.log(tipo, nombre, datos);

const client1 = {
    name1: 'Alberto',
    type1: 'Premium'
}

let {name1, type1, credit = 0} = client1
console.log(name1, type1, credit);
