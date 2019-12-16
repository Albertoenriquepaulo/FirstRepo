// Old way

// function reservacion(completo, opciones){
//     opciones = opciones || {}; //En caso que no se reciba opciones opcines = Objeto vacio 
//     console.log(opciones);
//     let {dias, cantidad, metodoPago} = opciones;
//     console.log(metodoPago, cantidad, dias);
// }

// //
// reservacion(true, {
//     metodoPago: 'TC',
//     cantidad: 2000,
//     dias: 3
// });

// reservacion(true)

// New way

function reservacion1(completo, {
    metodoPago = 'No Existe',
    cantidad = 0,
    dias = 0
    } = {}) {
        if (completo) {
            console.log('Proceder a reservar...');
        } else {
            console.log('Do nothing');
        }

    }

//
reservacion1(true, {
    metodoPago: 'TC',
    cantidad: 2000,
    dias: 3
});

reservacion1(false, {
    metodoPago: 'TC',
    cantidad: 2000,
    dias: 3
});