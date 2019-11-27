const cargarPost = QSelector('#cargar').addEventListener('click', cargarAPI);

function cargarAPI() {
    //crear el objeto
    const xhr = new XMLHttpRequest();
    const url = 'https://jsonplaceholder.typicode.com/posts'
    //crear y abre conexion
    xhr.open('GET', url, true);
    //carga y lee datos
    xhr.onload = function(){
        if (this.status === 200) {
            const rpta = JSON.parse(this.responseText);
            let contenido = '';
            rpta.forEach(post => {
                contenido += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                 `;
            });
            QSelector('#listado').innerHTML = contenido;
         }
    }
    xhr.send();  
}

//FUNCIONES
function QSelector(value){
    return document.querySelector(value);
}

function CL(variable){
    console.log(variable);
}