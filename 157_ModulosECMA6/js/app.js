import { nombreCliente, ahorro, mostrarInfo } from './cliente.js';

// Si hay muchas variables que importar se puede ahcer de esta forma
// client es un alias del objeto que contendrá todas las variables definidas en cliente.js
import * as client from './cliente.js';


console.log(nombreCliente);
console.log(ahorro);
console.log(client);
console.log(mostrarInfo('Alberto Paulo', 1000));
