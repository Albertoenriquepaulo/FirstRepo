const btn1 = QSelector('#boton1');
const btn2 = QSelector('#boton2');

btn1.addEventListener('click', function(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'empleado.json', true);

    xhr.onload = function(){
        if (this.status === 200) {
            const persona = JSON.parse(this.responseText);
            const htmlTemplate = `
            <ul>
                <li>ID: ${persona.id}</li>
                <li>Nombre: ${persona.nombre}</li>
                <li>Empresa: ${persona.empresa}</li>
                <li>Trabajo: ${persona.trabajo}</li>
            </ul>
            `;
            QSelector('#empleado').innerHTML = htmlTemplate;

        }
    }
    xhr.send();
});

btn2.addEventListener('click', function(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'empleados.json', true);

    xhr.onload = function(){
        if (this.status === 200) {
           const personal = JSON.parse(this.responseText);
           let htmlTemplate = '';
           personal.forEach(persona => {
                htmlTemplate += `
                <ul>
                    <li>ID: ${persona.id}</li>
                    <li>Nombre: ${persona.nombre}</li>
                    <li>Empresa: ${persona.empresa}</li>
                    <li>Trabajo: ${persona.trabajo}</li>
                </ul>
                `;
           });
           QSelector('#empleados').innerHTML = htmlTemplate;
        }
    }
    xhr.send();    
});

//FUNCIONES
function QSelector(value){
    return document.querySelector(value);
}

function CL(variable){
    console.log(variable);
}