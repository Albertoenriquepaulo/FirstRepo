class Interfaz{
    constructor(){
        //inicializa la app al intsanciar
        this.init();
        // leer el resultado
        this.listado = document.getElementById('resultado-eventos');
        
    }

    //Metodo para cuando inicialize la app
    init(){

    }

    // Imprimir categorias
    imprimirCategorias() {
        const listaCategorias = eventbrite.obtenerCategorias()      
    }      

}