//Agregando elementos
const link = document.querySelectorAll('.enlace')
const navegator = document.querySelector('#principal');
//Estas dos hacen lo mismo
link[0].remove();
//navegator.removeChild(link[0]);

console.log(navegator);

const firstList = document.querySelector('.enlace');
let elemento

//obtener una clase CSS
elemento = firstList.className;
elemento = firstList.classList.add('newClass');
elemento = firstList.classList;
console.log(elemento);

//Read attributes
elemento = firstList.getAttribute('href');
firstList.setAttribute('href', 'www.google.com')
firstList.setAttribute('data-id', 40);
elemento = firstList.hasAttribute('data-id'); //true is data-id exist, false, if it doesn't
firstList.removeAttribute('data-id');
console.log(elemento);
console.log(firstList.textContent);

