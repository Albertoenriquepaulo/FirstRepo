// Exportar variables
export const nombreCliente = 'Alberto'
export let ahorro = 200;

// Exportar funciones
// Las funciones son variables en JS por lo tanto se imprtan de igual forma
export function mostrarInfo(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro : ${ahorro} `;
}

// Exportar clases

export class Cliente{
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrarInfo() {
        return `Cliente: ${this.nombre} - Ahorro : ${this.ahorro} `;
    }

}