//Variables, video 55

const header = document.querySelector('#encabezado');
const links = document.querySelectorAll('.enlace');
const btn = document.querySelector('#vaciar-carrito');
//btn.addEventListener('click', getEvento);
//btn.addEventListener('dblclick', getEvento);
//btn.addEventListener('mousenter', getEvento);
//btn.addEventListener('mouseleave', getEvento);
//btn.addEventListener('mouseover', getEvento);
//btn.addEventListener('mouseout', getEvento);
//btn.addEventListener('mousedown', getEvento);
//btn.addEventListener('mouseup', getEvento);
//btn.addEventListener('mouseover', getEvento);
btn.addEventListener('mousemove', getEvento);


function getEvento(e){
    console.log(`EVENTO: ${e.type}`);
}