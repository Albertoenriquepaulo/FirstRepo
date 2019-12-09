const ciudadesVzla = ['Barcelona', 'PLC', 'Lecheria', 'Anaco', 'Cumaná', 'Carupano', 'Guanta'];
let counter = 0;

ciudadesVzla.forEach(element => {
    console.log(element);
});
callback = element => {console.log(element + ' from callback function');}
ciudadesVzla.forEach(callback);

//se agrega una nueva ciudad después de dos segundos

addCity = (element) =>{
    setTimeout( ()=>{
        ciudadesVzla.push(element);
        showCountries();
    }, 2000)
}

// Vamos a simular un api para traer las ciudades y las mostraremos en el HTML
showCountries = () => {
    let html = '';
    setTimeout( () => {
        ciudadesVzla.forEach(element => {
            html += `<li>${element} ${counter}</li>`;
        });
        document.getElementById('app').innerHTML = html;
        counter++;
    }, 1000)
}

addCity('Coro', showCountries);
showCountries();
//setInterval('showCountries()',1000);