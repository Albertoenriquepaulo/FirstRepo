const comprarBoleto = (function() {
    // Privado, lo que está fuera del return es privado, no puede ser accedido fuera del programa
    let evento = 'Coneferencia JS 2019';
    let precio = 200;

    // Publico
    return {
        mostrarBoleto: function () {
            console.log(evento);
        }
    }
})();

comprarBoleto.mostrarBoleto();