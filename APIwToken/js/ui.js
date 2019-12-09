//Crearemos la clase de UI
class Interfaz{

    constructor() {
        this.init();
    }

    init() {
        this.construirSelect();
    }

    construirSelect(){
        cotizador.obtenerMonedasAPI()
        .then(monedas =>{
            //crear un  select de opciones para la lista de criptomonedas
            const select = document.querySelector('#criptomoneda')
            //iteramos por cada uno de los resultados de la API
            for (const [key, value] of Object.entries(monedas.Data)) {
                //añadir el simbolo y el nombre como opciones
                const opcion = document.createElement('option');
                opcion.value = value.Symbol;
                opcion.appendChild(document.createTextNode(value.CoinName));
                select.appendChild(opcion);
            }
        })     
    }

    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        console.log(div);
        
        //Seleccionar mensaje mostrar contenido
        
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);
        //mostrar mensaje de error temporalmente

        setTimeout( ()=>{
            document.querySelector('.mensajes div').remove();
        },2000);
    }

    //Imprime el resultado de la cotizacion
    mostrarResultado(resultado, moneda, crypto){
        console.log(resultado[crypto][moneda]);
        const datosMoneda = resultado[crypto][moneda];
        const divCard = document.querySelector('#resultado > div');  

        //recortar digitos decimales de precios
        const precio = datosMoneda.PRICE.toFixed(2), 
                        porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2), 
                        actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-ES');
        //construir el template
        
        if (divCard) {
            divCard.remove(); 
            console.log('divCard Existe');
        }
        
        let templatetHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $ ${precio}</p>
                    <p>Variación último dia: %${porcentaje}</p>
                    <p>Última actulización: ${actualizado}</p>
                </div>
            </div>
        `
        this.spinnerOnOff('on');

        //insertar el resultado
        setTimeout(() => {
            this.spinnerOnOff('off');
            document.querySelector('#resultado').innerHTML = templatetHTML;  
        }, 2000)
        // document.querySelector('#resultado').innerHTML = templatetHTML;
        
    }

    //mostrar spinner de carga al enviar la cotización
    spinnerOnOff(value){
        const spinner = document.querySelector('.contenido-spinner');
        if (value === 'on') {
            spinner.style.display = "block";    
        } else {
            spinner.style.display = "none";
        }      
    }

    ocultarSpinner(){
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = "none";
    }
    
}