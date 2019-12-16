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
            // Agregar PIN
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]);
            this.markers.addLayer(marker);

        });
        this.markers.addTo(this.mapa);
    }
}