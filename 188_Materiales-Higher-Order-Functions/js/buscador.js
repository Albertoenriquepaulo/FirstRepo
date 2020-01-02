// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function obtenerAutos() {
    return [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ];
    
}

const autos = obtenerAutos();

// Datos para la búsqueda
let datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

function listener(id) {
    document.querySelector(`#${id}`).addEventListener('input', e => {
        datosBusqueda[id] = e.target.value;
        filtrarAuto();
    });
    
}

// Event Listener DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
   // mostrarAutos(autos);
});

// Event Listener para el formulario
listener('marca');
listener('year');
listener('minimo');
listener('maximo');
listener('puertas');
listener('transmision');
listener('color');


function mostrarAutos(autos) {
    const contenedor = document.querySelector('#resultado');
    contenedor.innerHTML = '';
    autos.forEach(auto => {
        p = document.createElement('p');
        p.innerHTML = `${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}` ;
        contenedor.appendChild(p);
    });
}

function noResultados() {
    const contenedor = document.querySelector('#resultado');
    contenedor.innerHTML = '';
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay resultado'));
    contenedor.appendChild(noResultado);
}

function filtrarAuto() {
    const resultado = obtenerAutos().filter(filtrarMarca)
                        .filter(filtrarYear)
                        .filter(filtrarMin)
                        .filter(filtrarMax)
                        .filter(filtrarPuertas)
                        .filter(filtrarTrans)
                        .filter(filtrarColor);

    if (resultado.length) {
        mostrarAutos(resultado)    
    } else {
        noResultados();
    }                        
    
    console.log(autosCopy);
}

function filtrarMarca(element) {
    if (datosBusqueda.marca) {
        return element.marca === datosBusqueda.marca;
    } else {
        return element;
    }
}

function filtrarYear(element) {
    console.log(element);
    console.log(+datosBusqueda.year);
    if (datosBusqueda.year) {
        return element.year === +datosBusqueda.year;
    } else {
        return element;
    }
}

function filtrarPuertas(element) {
    // console.log('AQUI', element);
    // console.log('AQUI1', +datosBusqueda.puertas);
    if (datosBusqueda.puertas) {
        return element.puertas === +datosBusqueda.puertas;
    } else {
        return element;
    }
}

function filtrarTrans(element) {
    if (datosBusqueda.transmision) {
        return element.transmision === datosBusqueda.transmision;
    } else {
        return element;
    }
}

function filtrarColor(element) {
    if (datosBusqueda.color) {
        return element.color === datosBusqueda.color;
    } else {
        return element;
    }
}

function filtrarMin(element) {
    if (datosBusqueda.minimo) {
        return element.precio >= +datosBusqueda.minimo;
    } else {
        return element;
    }
}

function filtrarMax(element) {
    if (datosBusqueda.maximo) {
        return element.precio <= +datosBusqueda.maximo;
    } else {
        return element;
    }
}


