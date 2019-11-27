//VARIABLES
const email = QSelector('#email');
const asunto = QSelector('#asunto');
const mensaje = QSelector('#mensaje');
//Estos dos que siguen pueden usarse para el click del boton enviar
const btnEnviar = QSelector('#enviar');
const formEnviar = QSelector('#enviar-mail');
const btnReset = QSelector('#resetBtn');


EventListeners();

//EVENT LISTENERS
function EventListeners(){
    //Estos dos que siguen pueden usarse para el click del boton enviar
    //btnEnviar.addEventListener('click', Enviar);
    formEnviar.addEventListener('submit', Enviar);

    btnReset.addEventListener('click', Reset);
    document.addEventListener('DOMContentLoaded', InicioApp);

    //campos del formulario
    email.addEventListener('blur', ValidateField);
    email.addEventListener('keyup', ValidateField);
    asunto.addEventListener('blur', ValidateField);
    asunto.addEventListener('keyup', ValidateField);
    mensaje.addEventListener('blur', ValidateField);
    mensaje.addEventListener('keyup', ValidateField);
}

//FUNCIONES
function QSelector(value){
    return document.querySelector(value);
}

function CL(variable){
    console.log(variable)
}
//desabilita e boton enviar
function InicioApp(){  
    btnEnviar.disabled = true;
}
//valida que los campos no queden vacios una vez clickeado
function ValidateField(){
    //Valdiar longitud de teto y que no este vacio
    ValidarLongitud(this);
    if (this.type === 'email') {
        ValidateEmail(this);

    }
    let errores = document.querySelectorAll('.error');
    if (errores.length === 0 && email.value !=='' && asunto.value !=='' && mensaje.value !=='') {
        btnEnviar.disabled = false;        
    }else {
        btnEnviar.disabled = true;
    }
    
}

function ValidarLongitud(campo){
    if (campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function ValidateEmail(campo){
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(campo.value)) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function Otro(campo){
    
}

function Enviar(e){ 
    e.preventDefault();
    //Spinner al presionar enviar
    
    ShowSpinnerAndEmailGif(2);
    
}

//Muestra el gif Spinner por time seg y después muestra el email GIF
//de enviado
function ShowSpinnerAndEmailGif(time){
    const spinnerGif = QSelector('#spinner');
    spinnerGif.style.display = 'block';
    setTimeout(function(){
        spinnerGif.style.display = 'none';
        EnviadoGIF(3);
    }, time*1000);
}

//se crea y se añade como hijo el Email Gif de enviado
function EnviadoGIF(time){
    const enviadoGif = document.createElement('img');
    enviadoGif.src = 'img/mail.gif';
    enviadoGif.style.display = 'block';
    //QSelector('#loaders').appendChild(enviado);
    document.querySelector('#loaders').appendChild(enviadoGif);
    //con el siguiente TimeOut oculto/remuevo el email.gif
    setTimeout(function(){
        //enviadoGif.style.display = 'none';
        enviadoGif.remove(); //este y el de arriba tienen el mismo resultado
        formEnviar.reset();
    }, time*1000);
}

//Resetear el formulario
function Reset(e){ 
    e.preventDefault(); 
    formEnviar.reset();
}