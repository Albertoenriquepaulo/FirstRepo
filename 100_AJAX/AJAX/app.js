QSelector('#cargar').addEventListener('click', cargarDatos);


//FUNCIONES

function cargarDatos(){
    //vrear el objeto xhtmlhttprequest
    const xhr = new XMLHttpRequest();
    //Abrir una conexion
    xhr.open('GET', 'datos.txt', true);

    xhr.onreadystatechange = function(){
        CL(`Estado ${this.readyState}`);
        if (this.readyState === 4 && this.status === 200) {
            //CL(this.responseText);
        }
    }

    /*Ready stage
    0 - No inicializado
    1 - Conexion establecida
    2 - Recibido
    3 - Procesando
    4 - Respuesta lista
    */
    xhr.send();
}

function QSelector(value){
    return document.querySelector(value);
}

function CL(variable){
    console.log(variable);
}