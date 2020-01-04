// Implicit Binding
const user = {
    nombre: 'Alberto',
    edad: 20,
    presentacion() {
        console.log(`Mi nombres es ${nombre} y tengo ${edad}`); //esto da error
    }
}

const usuario = {
    nombre: 'Alberto',
    edad: 20,
    presentacion() {
        console.log(`Mi nombres es ${this.nombre} y tengo ${this.edad}`); // Esto es IMPLICIT BINDING
    }
}

const usuario1 = {
    nombre: 'Alberto',
    edad: 20,
    presentacion() {
        console.log(`Mi nombres es ${this.nombre} y tengo ${this.edad}`);
    }
}

p = (nombre, edad) => {
    console.log(`Mi nombres es ${nombre} y tengo ${edad}`);
}

usuario.presentacion();
usuario1.presentacion();
p('Alberto Paulo', 40);

//user.presentacion(); // Este da error


const usuario2 = {
    nombre: 'Alberto',
    edad: 20,
    presentacion() {
        console.log(`Mi nombres es ${this.nombre} y tengo ${this.edad}`);
    },
    mascota: {
        nombre: 'Hook',
        edad: 1,
        presentacion() {
            console.log(`Mi nombres es ${this.nombre} y tengo ${this.edad}`);
        }
    } 
}

usuario2.presentacion();
usuario2.mascota.presentacion();