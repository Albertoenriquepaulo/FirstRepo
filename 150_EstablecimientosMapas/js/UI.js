class UI {
    constructor() {

        // instaciamos la API
        this.api = new API();

        // crear los markers con layer group
        this.markers =  new L.LayerGroup();

         // Iniciar el mapa
         this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }

    mostrarEstablecimientos(){
        this.api.obtenerDatos()
            .then(datos => {
                const resultado = datos.results;
                
                // ejecutar la funcion para mostrar los PINES
                this.mostrarPines(resultado);

            })
    }

    mostrarPines(datos){
        // Limpiar los markers
        this.markers.clearLayers();

        //recorrer los establecimientos
        datos.forEach(element => {
            const {latitude, longitude, calle, premium, regular} = element;
            //console.log(latitude);
            // Crear PopUp
            const opcionesPopUp = L.popup().setContent(`
                <p>Calle: ${calle}</p>
                <p><b>Regular:</b> ${regular}</p>
                <p><b>Premium:</b> ${premium}</p>
            `);

            // Agregar PIN
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]);
            marker.bindPopup(opcionesPopUp);
            this.markers.addLayer(marker);

        });
        this.markers.addTo(this.mapa);
    }
    //Buscador para obtener sugerencias
    obtenerSugerencias (busqueda){
        console.log('obtenerSugerencias');
        this.api.obtenerDatos()
            .then(datos => {
                //Obtenemos los datos
                const resultados = datos.results;
                // console.log('AQUI',resultados);
                // Enviar el JSON y la búsqueda para el filtrado 
                this.filtrarSugerencias(resultados, busqueda);

            }).catch((err) => {
                console.error(err);
            });
    }
    //Filtrar las sugerencias en base al input
    filtrarSugerencias(resultado, busqueda){
        //filtrar con .filter
        //con idexOf nos retornará la posicion en la que se encuentra, sino lo encuentra retornará -1
        //Aqui le decimos traeme todos en los que el resultado sea diferente a -1
        const filtro = resultado.filter(filtro => filtro.calle.indexOf(busqueda) !== -1);
        console.log(filtro);
       //mostrar los pines
       this.mostrarPines(filtro);
    }


}