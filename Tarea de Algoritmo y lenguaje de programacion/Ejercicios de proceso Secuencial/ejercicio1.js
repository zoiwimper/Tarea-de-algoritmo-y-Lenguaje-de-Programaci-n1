// 1. Pedir al usuario su nombre y saludarlo.
// Entrada: nombre=""(leer), se debe recicibir el nombre
// Proceso: solicitar el nombre del usuario para saludarlo, Escribir "Hola, inserte su nombre:"
//          "hola" + nombre + "¡Bienvenido!"
// Salida: Mostrar el nombre ingresado y saludarlo

// Pseudocodigo:
// InicioALgoritmo ejercicio_1
//  Escribir "Hola, inserte su nombre:"
//  Leer nombre
//  Escribir "Hola" + nombre + "¡Bienvenido!"
//  FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log
function ejercicio_1() {
    const nombre = prompt("Hola, inserte su nombre:");
    write("Hola," + nombre + "¡Bienvenido!");
}

ejercicio_1();