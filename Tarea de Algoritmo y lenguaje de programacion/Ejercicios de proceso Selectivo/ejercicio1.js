// 1.	Pedir al usuario un número y mostrar si es mayor o menor que 10.
// Entrada: numero=0(leer)
// Proceso: si numero > 10 entonces
//            Escribir "El número digitado es mayor que 10."
//           sino
//            Escribir "El número digitado es menor que 10."
//          FinSi
// Salida: Mostrar si el número es mayor o menor que 10.

// Pseudocodigo
// InicioAlgoritmo ejercicio_1
//  Escribir "Bienvenido seas, digita un número:"
//  Leer numero
//  Si numero > 10 Entonces
//    Escribir "El número digitado es mayor que 10."
//  Sino
//    Escribir "El número digitado es menor que 10."
//  FinSi
// FinAlgoritmo

const prompt = require('prompt-sync')();
const read = console.log;

function ejercicio_10() {
const numero = parseFloat(prompt('Bienvenido seas, digita un número:'));

if (numero > 10) {
    read('El número digitado es mayor que 10.');
}

else {
    read('El número digitado es menor que 10.');
}
}
 
ejercicio_10();