// Clases y Prototypes
/**
 * 
 */

class Playlist{
    constructor(nombre) {
        this.nombre = nombre;    
    }

    play() {
        console.log(`Playing ${this.nombre}`);
    }
    
    del() {
        console.log(`Deleting ${this.nombre}`);
    }

}


const playlist = new Playlist('Rock 90s');
console.log(playlist);
playlist.play();
playlist.del();