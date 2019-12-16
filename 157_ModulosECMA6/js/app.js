import { nombreCliente, ahorro, mostrarInfo, Cliente } from './cliente.js';
//Como ahorro existe en los dos JS, podemos hacer lo siguiente para dfierenciarlos usando "as"
// igual con mostrarInfo
import { nombreEmpresa, ahorro as ahorroEmpresa, categoria, mostrarInfo as mostrarInfoEmpresa, Empresa } from './empresa.js';

// Si hay muchas variables que importar se puede ahcer de esta forma
// client es un alias del objeto que contendrá todas las variables definidas en cliente.js
import * as client from './cliente.js';


console.log(nombreCliente);
console.log(nombreEmpresa);
console.log(ahorro);
console.log(ahorroEmpresa);
console.log(categoria);


console.log(client);
console.log(mostrarInfoEmpresa('Alberto Paulo', 1000));


// utilziar la clase

let cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente);
console.log(cliente.mostrarInfo()); 

// Ya importamos la clase Empresa, que a su vez hereda de Cliente, ahora declaramos una instancia para hacer pruebas
let empresa = new Cliente(nombreEmpresa, ahorroEmpresa, categoria );
console.log(empresa);
console.log(empresa.mostrarInfo()); 