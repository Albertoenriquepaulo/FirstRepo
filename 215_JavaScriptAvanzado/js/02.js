/** This con Explicit Binding */

function persona() {
    console.log(`Hola soy ${this.nombre}`);
}

const informacion = {
    nombre: 'Juan',
    trabajo: 'Programador'
}
// Si hago lo siguiente
persona();
persona(informacion);
// Ambas no conocen o identifican el this, ya que el objeto información esta fuera del
// scope de la funcion

// Call permite llamar especificando en que contexto la función será utilizada
// el call hace como que el objeto que le estamos enviando esta declarado dentro de la funcion
// lo añade a su Scope
persona.call(informacion);
persona.call({
    nombre: 'Alberto',
    trabajo: 'Programador'
});

/**
 * Una de las limitaciones del call es que cuando pasamos un arreglo hay que pasar
 * por separado cada una de las posiciones, ejemplo below
 */

function persona1(e1, e2) {
    console.log(`Hola soy ${this.nombre} y me gusta el ${e1} y ${e2}`);
}

const gMusicales = ['Heavy Metal', 'Rock'];
persona1.call(informacion, gMusicales);
persona1.call(informacion, gMusicales[0]);
persona1.call(informacion, gMusicales[0], gMusicales[1]);

/** Explicit binding con apply, (Si toma un arreglo)
 * 
 */

persona1.apply(informacion, gMusicales);


/** Explicit binding con bind, 
 * parecido a call pero crea una nueva funcion
 */
const nuevaFn = persona1.bind(informacion, gMusicales[0], gMusicales[1]);
nuevaFn();
//Lo mismo de arriba pero sin asignar la función a otra variable
persona1.bind(informacion, gMusicales[0], gMusicales[1])();