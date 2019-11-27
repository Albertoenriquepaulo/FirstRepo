//Convirtiendo proyectos a clases
class Insurance{
    constructor(brand, year, type){
        this.brand = brand;
        this.year =  year;
        this.type = type;
    }

    cotizarSeguro(){
        /*
            1 = Americano 1.15
            2 = Asiatico 1.05
            3 = Europeo 1.35
        */
       let cantidad;
       const base = 2000;
       switch (parseInt(this.brand)) {
            case 1:
                cantidad = base * 1.15;
                break;
            case 2:
                cantidad = base * 1.05;
                break;
            case 3:
                cantidad = base * 1.35;    
                break;            
           default:
               break;
       }
    
       //leer el año
       const diference = new Date().getFullYear() - this.year;
       //cada año de diferencia hay que reducir el valor del seguro
       cantidad = cantidad * (1-(0.03*diference));
       /*
          Basico , 30%mas
          Completo, 50%mas  
       */
       if (this.type === 'basico') {
           cantidad *= 1.3;
       }else{
           cantidad *= 1.5;
       }
       //return Math.round(cantidad);
       return cantidad.toFixed(2);
    }
}

//El siguiente constructor hará todo lo relacionado al HTML, interacción interfaz de usuario, es decir todo lo que se muestra. Y será vacio, ya que le añadiremos prototypes
class Interface{
    mostrarMensaje(mensaje, tipo){
        const div = document.createElement('div');
        let ms = 3000;
    
        if (tipo === 'error') {
            div.classList.add('mensaje', 'error');
        } else {
            div.classList.add('mensaje', 'correcto');
            ms = 1000;
        }
        //Ahora necesitamos insertar el HTML
        div.innerHTML = `${mensaje}`;
        form.insertBefore(div,QSelector('.form-group'));
        setTimeout(function(){
            QSelector('.mensaje').remove();
        },ms);
    }

    //Imprime el resultado de la cotizacion
    mostrarCotizacion(seguro, cantidad){
        const div = document.createElement('div');
        const resultado = QSelector('#resultado');
        const spinner = QSelector('#cargando img');
        let marca;
        switch (parseInt(seguro.brand)) {
            case 1:
                marca = 'Americano';
                break;
            case 2:
                marca = 'Asiatico';
                break;
            case 3:
                marca = 'Europeo';
                break;            
        default:
            break;
    }
    //Insertamos la info al div
    div.innerHTML = `
            <p class='header'>Tu Resumen:</p>
            <p>Marca: ${marca}</p>
            <p>Año: ${seguro.year}</p>
            <p>Tipo: ${seguro.type}</p>
            <p>Total: ${cantidad}</p>
    `;
        spinner.style.display = 'block';
        setTimeout(function(){
            spinner.style.display = 'none';
            resultado.appendChild(div);
        }, 1000);
        
        //const div = document.createElement('div');

    }
    
}//FIN CLASS

//Event listener
//const form = document.getElementById('cotizar-seguro');
const form = QSelector('#cotizar-seguro');
form.addEventListener('submit', function(e){
    e.preventDefault();
    //Leer la marca seleccionada del Select
    const brand = QSelector('#marca');
    const brandSelected = brand.options[brand.selectedIndex].value;
    //CL(brandSelected);
    //Leer el año
    const year = QSelector('#anio');
    const yearSelected = year.options[year.selectedIndex].value;
    //CL(yearSelected);
    //Leer el tipo
    const typeSelected = QSelector('input[name="tipo"]:checked').value;
    //CL(typeSelected);

    //Crear instancia de Interfaz
    const interfaz = new Interface();

    //Revisamos que los campos no estén vacios
    if (Validar(brandSelected, yearSelected, typeSelected)){
        //Limpiar resultados anteriores
        const resultados = QSelector('#resultado div');
        if (resultados != null) {
            resultados.remove();
        }
        //cuando todo esta correcto, instanciamos seguro y mostramos interfaz
        const seguro = new Insurance(brandSelected, yearSelected, typeSelected);
        //Cotizar el seguro
        const cantidad = seguro.cotizarSeguro(seguro);
        interfaz.mostrarCotizacion(seguro, cantidad);
        interfaz.mostrarMensaje('Cotizando...', 'exito');

    }else{ //hay un error
        //si falta selecconar algún campo
        interfaz.mostrarMensaje('Faltan datos...', 'error');
    }

})

const max = new Date().getFullYear(),
      min = max - 20;
const selectAnios = document.getElementById('anio');
 for (let index = max; index >= min; index--) {
     let option = document.createElement('option');
     option.value = index;
     option.innerHTML = index; //option.text = index, da igual
     selectAnios.appendChild(option);
 }

//FUNCTIONS
function QSelector(value){
    return document.querySelector(value);
}

function CL(variable){
    console.log(variable);
}

function Validar(brand, year, type){
    let success;
    success = true;
    if (brand === '' || year === '' || type === '' ) {
        success = false;
    }
    return success;
}
