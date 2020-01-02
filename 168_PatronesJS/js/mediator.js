const Vendedor = function (nombre) {
    this.nombre = nombre;
    this.sala = null;
}

const Comprador = function (nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype =  {
    oferta: function (articulo, precio) {
        console.log(`Tenemos el articulo ${articulo}, iniciamos en ${precio}`);
    },

    vendido: function (comprador) {
        console.log(`Vendido a ${comprador} (Sonido de mazo)`);
    }
} 

Comprador.prototype = {
    oferta: function (mensaje, comprador) {
        console.log(`${comprador.nombre} : ${mensaje}`);
    }
}


// Aqui es la subasta el mediador, es decir es esta quien controla los objetos
// vendedores y comrpadores
const Subasta = function () {
    let compradores = {};

    return{
        registrar: function (usuario) {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
            // console.log(compradores);
        }
    }
}

//Instanciar las clases
const juan = new Comprador('Juan');
const pablo = new Comprador('Pablo');
const alberto = new Comprador('Alberto');

const vendedor = new Vendedor('Vendedor');

const subasta = new Subasta();
subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(alberto);

vendedor.oferta('Mustang 1966', 3000);
juan.oferta(3500, juan);
pablo.oferta(4000, pablo);
alberto.oferta(10000, alberto);
vendedor.vendido(alberto.nombre);