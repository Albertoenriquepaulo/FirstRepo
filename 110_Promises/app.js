//Resolve es cuando se cumple el Promise
//Reject es cuando NO se cumple el Promise
let result = 0;
const esperando = new Promise( (resolve, reject) => {
    setTimeout( ()=>{
        resolve(suma (4,5)); //resolve('Se ejecutó');
    }, 5000);
});

//.then espera a que resolve se cumpla y ejecuta el código
esperando.then( (mensaje) => {
    console.log('numero:', mensaje);
});

suma = (a,b) => {return a+b}

const aplicarDescuento = new Promise( (resolve, reject) => {
    const descuento = false;
    if (descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar el Descuento');
    }
    
});

aplicarDescuento.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});


