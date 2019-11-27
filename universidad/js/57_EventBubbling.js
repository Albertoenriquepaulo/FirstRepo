//Event Bubbling, 57

const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const addCar = document.querySelector('.agregar-carrito');

card.addEventListener('click', function(e){
    e.stopPropagation();
    Action(1);
});
infoCurso.addEventListener('click', function(e){
    e.stopPropagation();
    Action(2);
});
addCar.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    Action(3);
});

function Action(key){
    switch (key) {
        case 1:
            console.log('Click on Card');
            break;
        case 2:
            console.log('Click on Info Curso');
            break;
        case 3:
            console.log('Click on Add to Car');
            break;
        default:
            break;
    }

}