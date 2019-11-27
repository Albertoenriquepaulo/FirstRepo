//Eventos para los Inputs, 56

const busqueda = document.querySelector("#buscador");
//busqueda.addEventListener('keydown', getEvento);
//busqueda.addEventListener('keyup', getEvento);
//busqueda.addEventListener('keypress', getEvento);
//busqueda.addEventListener('focus', getEvento);
//busqueda.addEventListener('blur', getEvento);
//busqueda.addEventListener('cut', getEvento);
//busqueda.addEventListener('copy', getEvento);
//busqueda.addEventListener('paste', getEvento);
//busqueda.addEventListener('input', getEvento); //este es TODo en uno
//busqueda.addEventListener('change', getEvento);

function getEvento(e){
    console.log(busqueda.value);
    console.log(`EVENTO: ${e.type}`);
}