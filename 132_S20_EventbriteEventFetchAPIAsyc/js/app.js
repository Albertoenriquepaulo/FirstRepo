const eventbrite = new EventBrite();
const ui = new Interfaz();

// liestener al buscador
document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();
    
    // Leer el texto del input buscar
    const textoBuscador = document.getElementById('evento').value;

    // Leer la categoria en el select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

    //Revisar que haya escrito en el buscador
    if (textoBuscador !== '') {
        console.log('buscando');
    }else{
        console.log('Debe colocar algo en el buscador');
    }
});