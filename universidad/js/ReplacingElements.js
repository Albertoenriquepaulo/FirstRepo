//Reemplazando elementos
const hdrOnlineCourse = document.querySelector
('#encabezado');
hdrOnlineCourse.textContent = "Online Courses";
console.log(hdrOnlineCourse);

const newHeader = document.createElement('h1');
newHeader.className = 'encabezado';
newHeader.id = 'encabezado';
newHeader.textContent = "Online Training";
//newHeader.appendChild(document.createTextNode("Online Training")); //igual a la linea de arriba
document.querySelector('#lista-cursos').replaceWith(newHeader);
console.log(newHeader);


