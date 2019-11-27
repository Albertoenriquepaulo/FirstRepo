const p1 = 'Pizza',
    pre1 = 30,
    p2 = 'Hamburguer',
    pre2 = 50;

let html;
/*
html = '<ul>' + 
        '<li>Orden: ' + p1 + '</li>' +
        '<li>Precio: ' + pre1 + '</li>' +
        '<li>Orden: ' + p2 + '</li>' +
        '<li>Precio: ' + pre2 + '</li>' +
        '<li>TOTAL: ' + (pre1 + pre2) + '</li>' 
        '</ul>';
        document.getElementById('app').innerHTML = html;
        */
html = `
    <ul>
        <li>Orden: ${p1}</li>
        <li>Precio: ${pre1}</li>
        <li>Orden: ${p2}</li>
        <li>Precio: ${pre2}</li>
        <li>TOTAL1: ${Total(pre1,pre2)}</li>
    </ul>`;
document.getElementById('ej1').innerHTML = html;

function Total(p1, p2){
    return p1+p2;
}
