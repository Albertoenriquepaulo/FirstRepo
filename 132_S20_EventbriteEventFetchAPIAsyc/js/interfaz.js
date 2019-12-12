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
                console.log(cats);
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

}