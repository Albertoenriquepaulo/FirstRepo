// NameSpace es una forma de evitar colisiones con nombre en el scope global de JS
// La idea es crear un objeto global alrededor de toda la app y agregar todas las 
// funciones y metodos en el mismo lugar que se puedan acceder de forma global
// La idea es ques e global pero que solo sea accedido por medio de un unico objeto
// en este caso restaurApp
const restaurApp = {};

restaurApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 20,
    },
    {
        platillo: 'Hamburguesa',
        precio: 0,
    },
    {
        platillo: 'Hot Dog',
        precio: 15,
    }
];


restaurApp.funciones = {
    ordenar: id => {
        console.log(`Tu platillo ${restaurApp.platillos[id].platillo} se está preparando`);
    }
} 


console.log(restaurApp);
restaurApp.funciones.ordenar(2);