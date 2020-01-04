/**
 * Herencia via Prototype
 */

function Playlist(nombre) {
    this.nombre = nombre;
}

Playlist.prototype.play = function () {
    console.log(`Playing ${this.nombre}`);
}

Playlist.prototype.del = function () {
    console.log(`Deleting ${this.nombre}`);
}

/** Herencia */
function Song(nombre, gen) {
    Playlist.call(this, nombre);
    this.gen = gen;
}

// Aqui abajo se heredan los metodos
Song.prototype = Object.create(Playlist.prototype); // Esta instancia debe estar antes de instanciar cancion
const cancion = new Song('Mi esperanza', 'Vito Difrizco');
const playlist = new Playlist('Rock 90s');

// cancion.play() //Esto daria un error, para poder hacerlo seguimos abajo

// Haremos como una forma de clonar un objeto

// Song.prototype = Object.create(Playlist.prototype); // Esta instancia debe estar antes de instanciar cancion
playlist.play();
cancion.play();

// Esto antes descrito es un poco engorroso, y para eso esta la composicion, 08.js
