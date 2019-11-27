//VARIABLES
const car = QSelector('#carrito'); //contenedor padre del carrito, usado en delegation para identificar click sobre eliminar items
const courseList = QSelector('#lista-cursos');  //Listado de cursos disponibles/visibles
const coursesInCar = QSelector('#lista-carrito tbody'); //cursos dentro del carrito
const clearCarBtn = QSelector('#vaciar-carrito'); //Btn Vaciar carrito

//console.log(car);
//console.log(courseList);
EventListeners();

//LISTENER
function EventListeners(){
    //Click en cualquiera de los cursos con Delegations
    courseList.addEventListener('click', ClickToAddToCar);
    //Cuando se elimna un elemento del carrito
    car.addEventListener('click', RemoveFromCar);
    //Clear car
    clearCarBtn.addEventListener('click', ClearCar);
    //Al cargar documento mostrar LS
    document.addEventListener('DOMContentLoaded', LSLoaded)
}

//FUNCIONES
function QSelector(value){
    return document.querySelector(value);
}

function ReadCourseData(cursoCard){
    const infoCursoToAdd = {
        imagen: cursoCard.querySelector('img').src,
        titulo: cursoCard.querySelector('h4').textContent,
        precio: cursoCard.querySelector('.precio span').textContent,
        id: cursoCard.querySelector('a').getAttribute('data-id')
    } 
    AddToCar(infoCursoToAdd);
}

//Muestra el curso seleccionadoe en el carrito
function AddToCar(infoCursoToAdd){
    const row = PrepareRow(infoCursoToAdd); //construye la fila para tr para meterla luego en el carrito
    coursesInCar.appendChild(row);
    SaveToLS(infoCursoToAdd);
}

function PrepareRow(infoCursoToAdd){
    const row = document.createElement('tr'); //creando la fila
    //td cada celda dentro de la fila
    row.innerHTML = `
        <td> 
            <img src="${infoCursoToAdd.imagen}" width = 150> 
        </td>
        <td>${infoCursoToAdd.titulo}</td>
        <td>${infoCursoToAdd.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${infoCursoToAdd.id}">X</a>
        </td>
    `;
    return row;
}

//se identifica y recopila la información asociada al curso que se escoja con click
function ClickToAddToCar(e){
    e.preventDefault();
    //Delegation para agergar-carrito
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoCard = e.target.parentElement.parentElement;
        //Enviamos el curso para tomar sus datos
        ReadCourseData(cursoCard);
    }
}

function RemoveFromCar(e){
    e.preventDefault();
    let cursoCardDataID;
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
        const cursoCard = e.target.parentElement.parentElement;
        cursoCardDataID = cursoCard.querySelector('a').getAttribute('data-id');
        console.log(cursoCardDataID);
    }
    RemoveFromLS(cursoCardDataID);
}

//Delete los cursos en el DOM
function ClearCar(e){
    //forma lenta
    //coursesInCar.innerHTML = '';
    //forma rapida, mas código pero es mas rápida (recomendada)
    while (coursesInCar.firstChild) {
        coursesInCar.removeChild(coursesInCar.firstChild);
    }
    localStorage.clear();
    return false; //previene saltos cuando se elimina
}

function SaveToLS(curso){
    let cursos;
    //toma el valor de un array con datos del LS o vacio
    cursos = GetCourseDataLS();
    //El curso seleccionado se agrega al array 
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

function GetCourseDataLS(){
    let cursosLS;
    //comprobamos si hay algo en LS
    if (localStorage.getItem('cursos') === null) {
        cursosLS = [];
    } else {
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursosLS;
}

function LSLoaded(){
    let cursosLS;
    cursosLS = GetCourseDataLS();
    cursosLS.forEach(function(infoCursoToAdd) {
        //construir el template
        const row = PrepareRow(infoCursoToAdd); //construye la fila para tr para meterla luego en el carrito
        coursesInCar.appendChild(row);
    });
}

function RemoveFromLS(cursoCardDataID){
    const courseListLS = GetCourseDataLS();
    
    courseListLS.forEach(function(curso, index){
        if (curso.id === cursoCardDataID) {
            courseListLS.splice(index, 1);
        }
    });
    localStorage.setItem('cursos', JSON.stringify(courseListLS));
    //console.log(cursosLS);
    
}