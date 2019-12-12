class Interfaz{
    constructor(){
        //inicializa la app al intsanciar
        this.init();
        // leer el resultado
        this.listado = document.getElementById('resultado-eventos');
        
    }

    //Metodo para cuando inicialize la app
    init(){
        this.imprimirCategorias();
    }

    // Imprimir categorias
    imprimirCategorias() {
        const listaCategorias = eventbrite.obtenerCategorias()
            .then(categorias => {
                const cats = categorias.categories;

                // seleccionamos el select categorias del index
                const selectCategoria = document.getElementById('listado-categorias');

                // recorremos el arreglo e imprimimos los options
                cats.forEach(element => {
                    const option = document.createElement('option');
                    option.value = element.id;
                    option.appendChild(document.createTextNode(element.name_localized));
                    selectCategoria.appendChild(option);
                });
            })

    } 
    // Lee la respuesta de la API e imprime los resulatdos
    mostrarEventos(eventos){
        // leer los ebventos y agregarlos a una variable
        const listaEventos = eventos.events;
        // recorrer los eventos y crear su template
        listaEventos.forEach(element => {
            this.listado.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <img class="img-fluid mb-2" src="${element.logo !== null ? element.logo.url : ''}">
                    </div>
                        <div class="card-body">
                            <h2 class="text-center">${element.name.text}</h2>
                            <p class="lead texto-info">Información del evento</p>
                            <p>${element.description.text.substring(0,280)}...</p>

                            <span class="badge badge-primary">Capacidad: ${element.capacity}</span>
                            <span class="badge badge-primary">Fecha y hora: ${element.start.local}</span>
                            <a href="${element.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar boletos</a>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });

    }
    // Limpia los resultados previos del evento
    limpiarResultados(){
        this.listado.innerHTML = '';
    }
    // Metodo para impirmir mensajes
    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.classList = clases;
        // agregar texto
        div.appendChild(document.createTextNode(mensaje));
        // buscar un padre
        document.getElementById('buscador').appendChild(div);
        // Quitar el alert después de tres segundos
        setTimeout(() => {
            this.limpiarMensaje();
        }, 2000);
    }

    // Desaparece el mensaje en caso de que exista
    limpiarMensaje(){
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }

}