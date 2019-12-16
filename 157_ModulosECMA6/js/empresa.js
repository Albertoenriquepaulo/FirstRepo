import { Cliente } from "./cliente.js";

// Exportar variables
export const nombreEmpresa = 'Udemy'
export let ahorro = 200000000;
export const categoria = 'Aprendizaje'

// Exportar funciones
// Las funciones son variables en JS por lo tanto se imprtan de igual forma
export function mostrarInfo(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro : ${ahorro} - Categoria: ${nombreEmpresa}`;
}

// utilizar la clase del modulo cliente
export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoria){
        super(nombre, ahorro);  //dejamos el mismo codigo heredado de la clase Cliente, solo modificamos categoria, que no está en aquella clase
        this.categoria = categoria;
    }
    mostrarInfo() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria: ${this.categoria}`;
    }
}