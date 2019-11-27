const automovil = {
    modelo: 'Camaro',
    motor: '3.3 Lt',
    anno: '2001',
    marca: 'Chevrolet'
}

const pendiente = ['a','b','c','d','e'];
for(let auto in automovil){
    if(auto == 'modelo')
        console.log(`${auto} : MODELO`);
    else        
        console.log(`${auto} : ${automovil[auto]}`);
    //console.log(`${auto}`);
    //console.log(`${auto} : ${auto.modelo}`);
}

pendiente.forEach(function(pendiente,index){
    console.log(pendiente);
})