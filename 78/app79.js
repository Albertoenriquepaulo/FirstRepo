//Otros objetos y constructores, 79

// Diferentes formas de crear funciones
const f1 = function(a,b){
    return a+b;
}

const f2 = new Function('a','b', 'return a+b'); //no es común
CL(f1(2,8));
CL(f2(1,8));
// Diferentes formas de crear objetos
const p1 = {
    name: 'Alberto'
}

const p2 = new Object({name: 'Alberto'}); //No es comun

CL(p1);
CL(p2);

//ARREGLOS
const array1 = [1,2,3,4];
const array2 = new Array(1,2,3,4);
CL(array1);
CL(array2);
//FUNCTIONS
function QSelector(value){
    return document.querySelector(value);
}

function CL(variable){
    console.log(variable);
}
