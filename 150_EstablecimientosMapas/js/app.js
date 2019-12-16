const ui = new UI();
document.addEventListener('DOMContentLoaded', () => {
    ui.mostrarEstablecimientos();
})

//Habilitar búsqueda de establecimientos
const buscador = document.querySelector('#buscar input');
buscador.addEventListener('input', () => {
    // Establecemos un nuemro a partir del cual se buscará en la API
    if (buscador.value.length > 5) {
        //Buscar en la API
        console.log(buscador.value);
        ui.obtenerSugerencias(buscador.value);
    } else {
        // Cuando ahcemos una búsqueda y obtenemos resultado, si borramos loq ue está en el input
        //queremos que vuelva a mostrar todo otra vez
        ui.mostrarEstablecimientos();
    }
    
});
