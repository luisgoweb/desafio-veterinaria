const { registrar, leer } = require('./operaciones');

//obtener los argumentos de la linea de comandos
const [operacion,nombre, edad, tipo, color, enfermedad] = process.argv.slice(2);

//Evaluar la operacion
if(operacion === 'registrar'){
    registrar(nombre, edad, tipo, color, enfermedad)
}else if(operacion === 'leer'){
    leer()
}else{
    console.log('La operacion no pudo ser realizada, debes escribir registrar o leer');
}