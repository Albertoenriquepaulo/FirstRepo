//Event Listeners, video 54
/*document.querySelector('#submit-buscador').addEventListener('click', function(event){
    event.preventDefault();
    alert('Looking for courses');
});*/

document.querySelector('#submit-buscador').addEventListener('click', RunWhenClick);

function RunWhenClick(event){
    event.preventDefault();
    alert('Looking for courses');
    let elemento = event;
    console.log(elemento);
}

/*Igual que la de arriba pero con la clase
document.querySelector('.submit-buscador').addEventListener('click', RunWhenClick);

function RunWhenClick(){
    event.preventDefault();
    alert('Looking for courses');
    let elemento = event;
    console.log(elemento);
}*/


document.querySelector('#encabezado').addEventListener('click', RunWhenClickOnText);

function RunWhenClickOnText(event){
    event.preventDefault();  //se puede quitar, no hay acciones por defecto
    event.target.innerText = 9+9; //OJO -> No se porque esto no autocompleta
    alert('You click on Cursos En Linea');
    let elemento = event;
    console.log(elemento);
}