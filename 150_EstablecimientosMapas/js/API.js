class API{
    url = 'https://api.datos.gob.mx/v1/precio.gasolina.publico';
    async obtenerDatos(){ 
        const total = 100;
        // Obtener los datos desde la API
        const datos = await fetch (`${this.url}?pageSize=${total}`);

        // Retornar datos como JSON
        const respuestaJSON = await datos.json();

        return respuestaJSON;
    }
}