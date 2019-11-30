QSelector('#generar-nombre').addEventListener('submit', cargarNombres);

//Llamado a AJAX e imprimir resultado
function cargarNombres(e) {
    e.preventDefault();
    //Leer las variables
    const origen = QSelector('#origen');
    const oSeleccionado = origen.options[origen.selectedIndex].value;

    const gen = QSelector('#genero');
    const oGen = gen.options[gen.selectedIndex].value;

    const cantidad = QSelector('#numero').value;

    let url = '';
    url = 'https://uinames.com/api/?';
    //Si hay origen agregarlo a la url
    if (oSeleccionado !== '') {
        url += `region=${oSeleccionado}&`;
    }
    //Si hay genero agregarlo a la url
    if (oGen !== '') {
        url += `gender=${oGen}&`;
    }
    //Si hay una cantidad agregarlo a la url
    if (cantidad !== '') {
        url += `amount=${cantidad}&`;
    }
    CL(url);
    //Iniciar XMLHTTPRequest
    const xhr = new XMLHttpRequest();
    //crear y abre conexion
    xhr.open('GET', url, true);
    //carga y lee datos
    xhr.onload = function () {
        if (this.status === 200) {
            const nombres = JSON.parse(this.responseText);
            //Generar el HTML
            let htmlNombres = '<h2>Nombres Generados</h2>';
            htmlNombres += '<ul class="lista">';
            //print cada nombre
            nombres.forEach(nombre => {
                htmlNombres += `
                <li>${nombre.name}</li>
                 `;
            });
            htmlNombres += '</ul>';
            QSelector('#resultado').innerHTML = htmlNombres;
        }
    }
    xhr.send();
}

//FUNCIONES
function QSelector(value) {
    return document.querySelector(value);
}

function CL(variable) {
    console.log(variable);
}