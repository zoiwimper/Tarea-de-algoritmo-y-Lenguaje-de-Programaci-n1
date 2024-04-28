// 8. Pedir al usuario su nombre y mostrarlo tres veces en la pantalla
// Entrada: nombre=""(leer), Asignar una variable a nombre(proceso)
// Proceso: Escribir nombre
//          Escribir nombre
//          Escribir nombre
// Salida: Mostrar el nombre 3 veces

// Pseudocodigo:
// InicioAlgoritmo ejercicio_8
//  Escribir "Bienvenido, inserte su nombre:"
//  Leer nombre
//  Escribir nombre
//  Escribir nombre
//  Escribir nombre
//  FinAlgoritmo


const prompt = require('prompt-sync')();
const write = console.log;
function ejercicio_8() {
    const nombre = prompt("Bienvenido, inserte su nombre:");
    write(nombre);
    write(nombre);
    write(nombre);
}
ejercicio_8();