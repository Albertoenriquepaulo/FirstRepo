// Builder, se trata de crear un abstraccion, es decir se crea una capa 
// extra (aparte de la funcionaldiad), es decir, no se programa directamente
// sobre el código, se crea como una capa extra y sobre esta se programa. 
// Esta abstraccion nos permitirá crear distintos tipos de objetos,
// en este patrone s necesario agregar el tipo y el contenido del objeto
// que deseamos crear
//
// Un buen ejemplo para esto seria un formulario

class Formulario{
    constructor(){
        this.campos = [];
    }

    agregarCampo(tipo, texto){
        let campos = this.campos;
        
        let campo;

        switch (tipo) {
            case 'text':
                
                break;
            case 'email':
            
                break;
            case 'button':
        
                break;                
            default:
                throw new Error('Tipo no válido' + tipo);
                break;
        }
        campos.push(campo);

    }

}

class Inputs{
    constructor(texto){
        this.texto = texto;
    }
}

// Instanciar formulario
const formulario = new Formulario();
