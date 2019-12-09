document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST);

function cargarTXT() {
    fetch('datos.txt')
        .then(res => res.text())  //Este primer then es como conectarse y traerse la informacion
        //con .text(), le decimos la forma como quiero obtener esa data, puede ser texto o JSAN revisando el proto podemos saber, hacemos un consolelog del res y vemos en el inspector el proto
        .then(data => document.getElementById('resultado').innerHTML = data) // aqui obtenemos la data que queremos  
        .catch((error) => console.log('ERROR', error));
}

//Cargar un JSON con fetch API
function cargarJSON() {
    fetch('empleados.json')
        .then(res => res.json())
        .then(data => {
            let html = '';
            data.forEach(element => {
                html += `<li>${element.nombre}: ${element.puesto}</li>`;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch((error) => console.log('ERROR', error));
}

//Igual a la de arriba pero haciendo pruebas, aqui recibo el primer then y lo coloco en una variable
//Me di cuenta que igual hay que hacerle un .then
function cargarJSONObj() {
    let JSONObj = fetch('empleados.json')
        .then(res => {
            return res.json();
        })
    console.log(JSONObj);
    let Arry = JSONObj.then(data => { return data });
    Arry.then(data => {
        data.forEach(element => {
            console.log(element);
        });

    });
    console.log(Arry);

}

//Consumiendo Rest API con Fetch API
function cargarREST() {
    fetch('https://picsum.photos/list')
        .then(res => res.json())
        .then(data => {
            let html = '';
            data.forEach(element => {
                html += `<li>
                            <a target="_blank" href="${element.post_url}">${element.author}</a>
                        </li>`;
                console.log(element);
            });
            document.getElementById('resultado').innerHTML = html;
        })
        .catch((error) => console.log('ERROR', error));
}