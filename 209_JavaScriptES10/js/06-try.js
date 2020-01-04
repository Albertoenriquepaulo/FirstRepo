try {
    throw new Error('Algo salió mal')
} catch (error) {
    console.log('Hubo un error bastante grave');
}

// Averiguar, ya que este try permite por ejemplo como es este caso, que tenemos un 
// mensaje de error 'Algo salió mal', podemos imprimir o emitir otro mensaje en el 
// catch ('Hubo un error bastante grave'