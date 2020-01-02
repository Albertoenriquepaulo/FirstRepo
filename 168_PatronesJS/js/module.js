// OJO -> https://www.pensemosweb.com/patrones-de-diseno-en-javascript-singleton-factory/
// Forma de JS de hacer clases con recursos Privados y Públicos

const comprarBoleto = (function() {
    // Privado, lo que está fuera del return es privado, no puede ser accedido fuera del programa
    let evento = 'Conferencia JS 2019';
    const adquirirBoleto = () =>{
        const elemento = document.createElement('p');
        elemento.textContent = `Comprando Boleto para: ${evento}`;
        document.querySelector('#app').appendChild(elemento);
    }

    // Publico, lo que esté dentro del return se puede tener acceso publico, fuera de el es privado
    return {
        mostrarBoleto: function () {
            adquirirBoleto();
        },

        mostrarBoleto1: () => {
            adquirirBoleto();
        }
    }
})();

//Ejemplo de funcion  iife
(function(a, b) {
    console.log(a+b);
})(18, 2);



comprarBoleto.mostrarBoleto();
comprarBoleto.mostrarBoleto1();