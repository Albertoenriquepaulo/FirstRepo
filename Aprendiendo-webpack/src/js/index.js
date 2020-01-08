// Para que esta linea de abajo funcione hay que instalar los loaders necesarios
// En este caso:
//     npm install --save-dev style-loader css-loader
// Esta linea hace que se aplique el CSS sin necesidad de linkearlo en el HTML
// Esto no se puede hacer con JS FocusNavigationEvent, pero si con Webpack
import '../css/style.scss';

const clientes = ['C1', 'C2', 'C3', 'C4'];
let html = '';
clientes.forEach((cliente) => {
    html += `
        <li>${cliente}</li>
    `;
});

document.querySelector('#clientes').innerHTML = html;

console.log(document.querySelector('#clientes'));
