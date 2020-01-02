const autos = [
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
//console.table(autos);

// forEach
// autos.forEach(auto => {
// 	console.log(auto);
// });
//----------------------------------------------------------------------------------------
// Muy similar al foreach	
// MAP (map)
// El map comparado con el forEach de arriba da el mismo resultado
// la Diferencia está en que map retorna un arreglo nuevo
// let resultado = autos.forEach(auto => {
// 	return auto;
// }); //Esto retornará undefined, ya que forEach no devuelve valor, solo accede

// let resultado = autos.map(auto => {
// 	return auto;
// }); // Esto si es correcto ya que map si retorna valor

// let resultado = autos.map( auto => auto );  // Igual que el de arriba pero mas simple

//----------------------------------------------------------------------------------------
// filter
// Recomendado para extraer valores

// Quiero todos los autos marca BMW
// let resultado = autos.filter(auto => {
// 	return auto.marca === 'BMW';
// });
// resultado = autos.filter(auto => auto.marca === 'BMW'); //Igual que el de arriba
// console.log(resultado);

// // Quiero todos los autos diferentes a BMW
// resultado = autos.filter(auto => auto.marca !== 'BMW'); //Igual que el de arriba
// console.log(resultado);

// resultado = autos.filter(auto => auto.year > 2015); //Igual que el de arriba
// console.log(resultado);

// resultado = autos.filter(auto => auto.puertas === 2 && auto.year <= 2017); 
// console.log(resultado);

//----------------------------------------------------------------------------------------
// find
// Retorna el primer elemento que encuentre, solo UNO
// resultado = autos.find(auto => auto.marca === 'BMW'); //Igual que el de arriba
// console.log(resultado);
//----------------------------------------------------------------------------------------
// reduce
// Caracteristica principal, es que toma todos los valores y retorna un valor único

let resultado = autos.reduce((total, auto) => total + auto.precio, 0);
console.log(resultado);

const numeros = [1,2,3,4];
let initValue = 0;
resultado = numeros.reduce((anteriorValue, actualValue) => anteriorValue + actualValue, initValue);
console.log(resultado);
















//----------------------------------------------------------------------------------------
// some


