const ui = new Interfaz();

//Leer el formulario
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log('pulsado el submit del formulario');

    //leer moneda seleccionada
    const monedaSelect = document.getElementById('moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
    
    const criptoMonedaSelect = document.getElementById('criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
    
    //comporbar que todos los campor tengan algo seleccionado
    if (monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
        //TODO: Arrojar alerta de error
        ui.mostrarMensaje('Ambos campos son obligatorios','alert bg-danger text-center');
        console.log("Falta seleccionar alguna de las opciones");   
    } else {
        //TODO: Consultar la API
        console.log("Good");
    }
    console.log(monedaSeleccionada);
    console.log(criptoMonedaSeleccionada);

});