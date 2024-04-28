// 5. Solicitar al usuario su edad y mostar un mensaje indicando cuántos años tendrá en el próximo año.
// Entrada: edad=""(leer), edad_proximo_año(proceso)
// Proceso: edad_proximo_año = edad + 1
// Salida: edad_proximo_año

// Pseudocodigo:
// InicioAlgoritmo ejercicio_5
//  Escribir "Hola, ingresa tu edad"
//  Leer edad
//  edad_proximo_año = edad + 1
//  Escribir "El proximo año tendrás", edad_proximo_año, "años."
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log
function _ejercicio_5(){
    let edad = Number(read("Hola, ingresa tu edad"));
    let edad_proximo_año = edad + 1;
    write ("El proximo año tendrás", String(edad_proximo_año), "años.");
}
_ejercicio_5();