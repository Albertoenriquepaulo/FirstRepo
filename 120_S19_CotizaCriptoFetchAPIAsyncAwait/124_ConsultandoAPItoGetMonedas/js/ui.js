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
        },3000);
    }
}