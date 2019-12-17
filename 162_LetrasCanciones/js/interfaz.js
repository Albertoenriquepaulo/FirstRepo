export const formBuscar = document.querySelector('#formulario-buscar'),
    divBuscar = document.querySelector('#buscar'),
    divMensajes = document.querySelector('#mensajes'),
    divResultado = document.querySelector('#resultado');

export function errorMessage(errorMsg) {
    divMensajes.classList.add('error');
    divMensajes.innerHTML = errorMsg;
    console.log('DENTRO de errorMessage');
    setTimeout(() => {
        divMensajes.innerHTML = '';
        divMensajes.classList.remove('error');
        formBuscar.reset();
    }, 2000);
}