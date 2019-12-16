// Son formas correctas de crear Expresiones regulares
const exp1 = new RegExp('/abc/');
const exp2 = /abc/;

let valor, expReg;
expReg = /[0123456789]/;
expReg = /[0-9]/; //igual a lo de arriba
valor = 'hola';

// Fecha en expresion regular 20-10-2018
expReg = /\d\d-\d\d-\d\d\d\d/;  // d -> es para los numeros
valor = '20-10-2018';

// D mayuscula busca caracter qe no sea un numero
//Hora: 10:30 AM
expReg = /\d\d:\d\d \D\D/;  
valor = '10:30 AM';


//comprobar varios digitos, infinitos
expReg = /\d+/;  
valor = '1024587521235a';

//Negar la expresion con ^
expReg = /[^0-9]/; //
valor = '1254';

// Sintaxis con llaves {1,2}
expReg = /\d{1,2}-\d{1,2}-\d{4}/; // {1,2} uno o dos digitos  
valor = '20-1-2018';


// Bastante confiable para evaluar emails
expReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; 
valor = 'Alberto@grf.com'
console.log(expReg.test(valor)); 