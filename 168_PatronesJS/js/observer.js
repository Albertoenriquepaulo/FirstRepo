// Observer
// También conocido como suscriptor publicador

// https://www.pensemosweb.com/implementar-patron-observador-javascript/

let observer = {
    obtenerOfertas: function (callback) {
        if (typeof callback === 'function') {
            this.subscribers[this.subscribers.length] = callback;
        }
    },

    cancelarOfertas: function (callback) {
        for (let index = 0; index < this.subscribers.length; index++) {
            if (this.subscribers[index] === callback) {
                delete this.subscribers[index];
            }

        }
    },
    publicarOfertas: function (oferta) {
        for (let index = 0; index < this.subscribers.length; index++) {
            if (typeof this.subscribers[index] === 'function') {
                this.subscribers[index](oferta);
            }
        }
    },
    crear: function (objeto) {
        for (let i in this) {
            if (this.hasOwnProperty(i)) {
                objeto[i] = this[i];
                objeto.subscribers = [];
            }
        }
    }
}


// Vendedores
const udemy = {
    nuevoCurso: function () {
        const curso = 'Un nuevo curso de JS';
        this.publicarOfertas(curso);
    }
}
console.log(udemy);
// const facebook = {
//     nuevoAnuncio: function () {
//         const oferta = 'Compra un celular';
//         this.publicarOfertas(oferta);
//     }
// }

// // Crear los publicadores
// observer.crear(udemy);
// observer.crear(facebook);

// const juan = {
//     compartir: function (oferta) {
//         console.log('Excelente oferta! ' + oferta);
//     }
// }

// const Karen = {
//     interesa: function (oferta) {
//         console.log('Me ineteresa la oferta de ' + oferta);
//     }
// }

// udemy.obtenerOfertas( juan.compartir )
// udemy.nuevoCurso();