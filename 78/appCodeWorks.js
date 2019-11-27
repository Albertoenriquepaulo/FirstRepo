/*let str = 'Hola Mundo';
let strInv = '';
let size = str.length;
for (; size >= 0; size--) {
        strInv = strInv + str.charAt(size-1);
}*/
let str = 'Hola Mundo';
let strArray = str.split('');
let strArray1 = str.split();
//strArray[0] = strArray[0].toUpperCase();

//str = ((str.split("")).reverse()).join("");

function factorial(num){
    let resultado;
    if (num === 1)
        return num;
    else
        return (num * factorial(num-1));       
}

CL(strArray);
CL(factorial(10));

//FUNCTIONS
function QSelector(value){
    return document.querySelector(value);
}

function CL(variable){
    console.log(variable);
}
