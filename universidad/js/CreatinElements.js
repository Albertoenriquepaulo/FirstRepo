const nav = document.querySelector('#principal');
const Bar = document.querySelector('.barra');
const links = document.querySelectorAll('.enlace');
const courses = document.querySelectorAll('.card');

const newLink = document.createElement('a');
//adding class
newLink.className ='enlace';
//adding class
newLink.id ='new-id';
//adding attribute
newLink.href = '#';
//newLink.setAttribute('href', '#');

//adding text
newLink.textContent = 'New Link';
//newLink.appendChild(document.createTextNode('New Link'));

//Adding to HTML
document.querySelector('#secundaria').appendChild(newLink);

console.log(newLink);
//console.log(links[0].isConnected);
//console.log(courses[0].childNodes);



