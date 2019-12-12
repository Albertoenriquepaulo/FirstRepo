class EventBrite{
    constructor(){
        this.token_auth = 'MMI37C5JNDXFWPQPM6BD';
        this.ordenar = 'date';
    }
    // Obtiene las categorisa en init()
    async obtenerCategorias() {
        // consultar las categorias a la REST API eventBrite
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        // Esperar la respuesta de las categorias y devolver un JSON
        const categorias = await respuestaCategorias.json();
        //devolvemos el resultado

        return categorias;

    }
}