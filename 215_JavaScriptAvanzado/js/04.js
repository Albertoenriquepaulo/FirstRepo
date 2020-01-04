/**
 * Windows Binding
 */

 function getAuto(color) {
     //Aqui el busca en su scope y si no lo busca en el windows
     console.log(`Mi auto es color ${this.color}`);
     console.log(`Mi auto es color ${color}`);
 }

 window.color = 'Blanco';
 getAuto('Negro');