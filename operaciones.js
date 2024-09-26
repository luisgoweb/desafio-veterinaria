const fs = require('node:fs');

//crear función para registrar mascotas
function registrar( nombre, edad, tipo, color, enfermedad ){
    //leer el archivo citas.json
    const citas = JSON.parse( fs.readFileSync('./citas.json', 'utf-8'));

    //crear un objeto para la  nueva cita
    const nuevaCita = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad
    }

    //Agregamos la nuevaCita a citas
    citas.push(nuevaCita);

    //Agregamos la cita acutalizada a citas.json
    fs.writeFileSync( './citas.json', JSON.stringify(citas, 2), 'utf-8' );

    //Mostramos el resultado en la consola
    console.log(`Cita Registrada ${nombre} - ${edad} - ${tipo} - ${color} - ${enfermedad}`);
}