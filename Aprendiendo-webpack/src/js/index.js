// Para que esta linea de abajo funcione hay que instalar los loaders necesarios
// En este caso:
//     npm install --save-dev style-loader css-loader
// Esta linea hace que se aplique el CSS sin necesidad de linkearlo en el HTML
// Esto no se puede hacer con JS FocusNavigationEvent, pero si con Webpack
import '../css/style.scss';
// si queremos importar bootstrap o material fundación o material design se hace de 
// esta forma escrita arriba, con import

class Cliente {
    constructor(name) {
        this.name = name;
    }
}

const cliente = new Cliente('Alberto');
console.log(cliente);

console.log('From index.JS');



// Es costumbre llamar a este archivo Entry Point, ya que esta declarado en el webpack config
// en module-exports -> entry