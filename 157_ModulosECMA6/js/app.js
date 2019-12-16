import { nombreCliente, ahorro, mostrarInfo, Cliente } from './cliente.js';

// Si hay muchas variables que importar se puede ahcer de esta forma
// client es un alias del objeto que contendrá todas las variables definidas en cliente.js
import * as client from './cliente.js';


console.log(nombreCliente);
console.log(ahorro);
console.log(client);
console.log(mostrarInfo('Alberto Paulo', 1000));


// utilziar la clase

let cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente);
console.log(cliente.mostrarInfo()); 

