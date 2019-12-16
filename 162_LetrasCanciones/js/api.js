// class API{
//      url = 'https://api.lyrics.ovh/v1/';
//      async obtenerDatos(){ 
//          const total = 1000;
//          // Obtener los datos desde la API
//          const datos = await fetch (`${this.url}?pageSize=${total}`);
 
//          // Retornar datos como JSON
//          const respuestaJSON = await datos.json();
 
//          return respuestaJSON;
//      }
//  }

 export class API{
     url = 'https://api.lyrics.ovh/v1/';
     constructor(artist, title){
          this.artist = artist;
          this.title = title;
     }
     async obtenerDatos(){ 
         // Obtener los datos desde la API
         const datos = await fetch (`${this.url}/${this.artist}/${this.title}`);
 
         // Retornar datos como JSON
         const respuestaJSON = await datos.json();
 
         return respuestaJSON;
     }
 }