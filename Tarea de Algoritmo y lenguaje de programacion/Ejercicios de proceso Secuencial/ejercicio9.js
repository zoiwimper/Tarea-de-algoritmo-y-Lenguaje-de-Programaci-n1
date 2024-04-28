// 9. Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
// Entrada: número=""(leer), numero(leer), Multiplicar del 1 al 10
// Proceso: Para i desde 1 hasta 10 hacer
//           producto = numero * i
//           Escribir numero, "x", i, "=", producto
//          FinPara
// Salida: mostrar la multiplicación del numero digitado 

// Pseudocodigo:
// InicioAlgoritmo ejercicio_9
//  Escribir "Por favor, ingresa un número:"
//  Leer numero
//  Para i desde 1 hasta 10 hacer
//   producto = numero * i
//   Escribir numero, "x", i, "=", producto
//  FinPara
// FinAlgoritmo

const prompt = require('prompt-sync')();

function _ejercicio_9() {
    let numero = parseFloat(prompt("Por favor, ingresa un número:"));
    for (let i = 1; i <= 10; i++) {
        let producto = numero * i;
        console.log(numero, "x", i, "=", producto);
    }
}

_ejercicio_9();
