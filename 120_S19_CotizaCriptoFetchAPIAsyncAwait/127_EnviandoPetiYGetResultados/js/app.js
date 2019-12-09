const cotizador = new API('3710ca12a3055ab3747d590ab675e9d54d54745e7f03773bee547ab7966c0c9b');
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
    if ( (monedaSeleccionada === '' || criptoMonedaSeleccionada === '') && !document.querySelector('.mensajes div')) {
        //TODO: Arrojar alerta de error
        ui.mostrarMensaje('Ambos campos son obligatorios','alert bg-danger text-center');
        console.log("Falta seleccionar alguna de las opciones");   
    } else {
        //TODO: Consultar la API
        console.log("Good");
        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
            .then(data => {
                console.log(data.RAW);
                ui.mostrarResultado(data.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
            })
    }
    // console.log(monedaSeleccionada);
    // console.log(criptoMonedaSeleccionada);

});

let token = 'OENOKbj6MyPtwSIgW6ZopOjYx5_L_OtXHr-4';

    let myheaders = {
      //"appID": appID,
      //"authorizationkey": token,
      "Authorization": `Bearer ${token}`
    }

    fetch('https://gorest.co.in/public-api/users/1775', {
      method: "GET",
      headers: myheaders //{"Authorization": `Bearer ${token}`}
    }).then(function(response) {
    /*console.log(response.status);     //=> number 100–599
      console.log(response.statusText); //=> String
      console.log(response.headers);    //=> Headers
      console.log(response.url);        //=> String
      console.log(response);        //=> String*/

      //return response.text()
      return response.json()
    }, function(error) {
      console.log(error.message); //=> String
    })
    .then((element) =>{
        console.log("element");
        console.log(element.result);
        console.log(element.result.address);
    })

