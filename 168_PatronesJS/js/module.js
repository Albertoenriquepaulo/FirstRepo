// Forma de JS de hacer clases con recursos Privados y Públicos
const comprarBoleto = (function() {
    // Privado, lo que está fuera del return es privado, no puede ser accedido fuera del programa
    let evento = 'Coneferencia JS 2019';
    const adquirirBoleto = () =>{
        const elemento = document.createElement('p');
        elemento.textContent = `Comprando Boleto para: ${evento}`;
        document.querySelector('#app').appendChild(elemento);
    }

    // Publico
    return {
        mostrarBoleto: function () {
            adquirirBoleto();
        },

        mostrarBoleto1: () => {
            adquirirBoleto();
        }
    }
})();

comprarBoleto.mostrarBoleto();
comprarBoleto.mostrarBoleto1();