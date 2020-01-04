// Clases y Prototypes
/**
 * El prototype está atado con el objeto
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

const playlist = new Playlist('Rock 90s');
console.log(playlist);
playlist.play();
playlist.del();

// Esto de arriba es la forma anterior de hacerlo, ahora se agregaron las clases
// Pasarlo a clases esta en el 06-2.js