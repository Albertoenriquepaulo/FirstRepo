// JavaScript Event Loop -> https://www.youtube.com/watch?v=8aGhZQkoFbQ
//                          https://developer.mozilla.org/es/docs/Web/JavaScript/EventLoop
/**
 * Existe un stack y una cola o Queue, lo que se coloca en la cola se ejecuta primero
 * lo que esta en el Queue solo se ejecuta cuando acaba de ejecutar todo de la cola
 * Aqui vemos con el los setTimeout le colocamos 0, es decir se deberia ejecutar 
 * como si no estuviera, pero al colocarlo sus instrucciones pasan a la Queue, lo que
 * significa que se ejecutan después que el Stack se vacie
 * setTimeout se le coloca como NoneBlocking, no se coloca en el Stack
 * 
 * Existen dos tipos de Queue:
 *   Task Queue
 *   Jobs Queue
 * 
 * Las promesas se alamcenan en los Jobs Queue, y los Jobs Queue tienen prioridad
 * sobre los Task Queue, por eso vemos que en este ejemplo la promesa se ejecuta 
 * primero que los mensajes de los setTimeout, porque los setTimeout se alamacenan
 * en los Task Queue 
 */
console.log('Yo me mostraré primero');

console.log('Yo me mostraré 2do');

setTimeout(() => {
    console.log('Yo me mostraré 3ero');    
}, 0);


console.log('Yo me mostraré 4to');

setTimeout(() => {
    console.log('Yo me mostraré 5to');    
}, 0);

new Promise((resolve) => {
    resolve('Yo soy un promise')
}).then(console.log);

console.log('Yo me mostraré 6to');