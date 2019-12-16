let cliente =new Map();
cliente.set('nombre', 'Alberto');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

//Accediendo a los valores
console.log(cliente.get('nombre'));
console.log(cliente.get('tipo'));
console.log(cliente.get('saldo'));

// Metodos del MAP

//Tamaño
console.log(cliente.size);

//comporbar que un valor existe
console.log(cliente.has('apellido'));
console.log(cliente.has('nombre'));

// eliminar propiedad del map
console.log(cliente.delete('nombre'));

console.log(cliente);

cliente.clear();

console.log(cliente);

//Pasar propiedades por default
const paciente =  new Map(
    [['nombre', 'paciente'],
     ['habitacion', 'no definido']
    ]
);
paciente.set('nombre', 'Alfredo');
paciente.set('habitacion', 400);
paciente.set('habitacion', 500);

// Map puede ser recorrido por un forEach
paciente.forEach( (element, index) => {
    console.log(`forEach: ${index}: ${element}`);    
});

console.log(paciente);

// CONCLUSION
// Si necesitamos llave y valor utilizamos MAP
// Si necesitamos valor utilizamos SET