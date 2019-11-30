const cities =['Londres', 'Madrid', 'Barcelona', 'Vienna', 'Bilbao'];
cities.forEach((ciudad) => {
    CL(ciudad);
});

function newCity(ciudad, callback){
    setTimeout(()=>{
        cities.push(ciudad);
        callback();//CL(cities);
    }, 3000);
}

function showCities(){
    setTimeout(()=>{
        let html='';
        cities.forEach((ciudad) => {
            html += `<li>${ciudad}<li>`;
        });
        QSelector('#resultado').innerHTML = html;
        CL(html);
    }, 1000);
}

newCity('Alemania',showCities);
showCities();


