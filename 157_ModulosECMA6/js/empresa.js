// Exportar variables
export const nombreEmpresa = 'Udemy'
export let ahorro = 200000000;
export const categoria = 'Aprendizaje'

// Exportar funciones
// Las funciones son variables en JS por lo tanto se imprtan de igual forma
export function mostrarInfo(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro : ${ahorro} - Categoria: ${nombreEmpresa}`;
}