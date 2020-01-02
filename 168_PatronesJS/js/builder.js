// Builder, se trata de crear un abstraccion, es decir se crea una capa 
// extra (aparte de la funcionalidad), es decir, no se programa directamente
// sobre el código, se crea como una capa extra y sobre esta se programa. 
// Esta abstraccion nos permitirá crear distintos tipos de objetos,
// en este patrone es necesario agregar el tipo y el contenido del objeto
// que deseamos crear
//
// Un buen ejemplo para esto seria un formulario

// OJO -> https://www.pensemosweb.com/patrones-de-diseno-en-javascript-singleton-factory/

class Formulario {
    constructor() {
        this.campos = [];
    }

    agregarCampo(tipo, texto) {
        let campos = this.campos;

        let campo;

        switch (tipo) {
            case 'text':
                campo = new InputText(texto);
                break;
            case 'email':
                campo = new InputEmail(texto);
                break;
            case 'button':
                campo = new Boton(texto);
                break;
            default:
                throw new Error('Tipo no válido' + tipo);
                break;
        }
        campos.push(campo);

    }
    // nos traerá una instancia del formulario con los campos
    // Abajo creamos los campos que queremos en el formulario
    // Y con esta función los añadimos realmente al formulario
    obtenerFormulario(){
        let form = document.createElement('form'),
            campos = this.campos.length,
            campo;
        
        for (let index = 0; index < campos; index++) {
            campo = this.campos[index];
            // Estamos usando create element por lo que debemos usar appendChild
            form.appendChild(campo.crearElemento());
            let br = document.createElement('br');
            form.appendChild(br);
        }

        return form;
    }

}

class Inputs {
    constructor(texto) {
        this.texto = texto;
    }

}

class InputText extends Inputs {
    constructor(texto) {
        super(texto);
    }
    crearElemento() {
        const inputText = document.createElement('input');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('placeholder', this.texto);
        return inputText;
    }
}

class InputEmail extends Inputs {
    constructor(texto) {
        super(texto);
    }
    crearElemento() {
        const inputEmail = document.createElement('input');
        inputEmail.setAttribute('type', 'email');
        inputEmail.setAttribute('placeholder', this.texto);
        return inputEmail;
    }
}

class Boton extends Inputs {
    constructor(texto) {
        super(texto);
    }
    crearElemento() {
        const boton = document.createElement('button');
        boton.setAttribute('type', 'submit');
        boton.textContent = this.texto;
        return boton;
    }
}


// Instanciar formulario
const formulario = new Formulario();
console.log('ANTES de agregarCampo', formulario);
// creamos los campos necesarios o que queremos en el formulario
formulario.agregarCampo('text', 'Añade tu nombre');
formulario.agregarCampo('text', 'Añade tu apellido');
formulario.agregarCampo('email', 'Añade tu email');
formulario.agregarCampo('button', 'Enviar');

// Renderizar en el HTML
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#app').appendChild(formulario.obtenerFormulario());

});

console.log('DESPUES de agregarCampo', formulario);

// Esta es la logica detras del builder, se crean distintos tipos de objeto, 
// donde se especifica el tipo de objeto que se va crear

