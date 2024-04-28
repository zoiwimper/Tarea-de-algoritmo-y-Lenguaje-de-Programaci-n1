// 14. Dado un arreglo de 5 elementos, presentar el primero, el del medio y el ultimo.
// Entrada: definir los elementos escritos, Leer los arreglos y asignarlos por posiciones(proceso)
// Proceso:Dimensión arreglo(5)
//         Leer arreglo(0)
//         leer arreglo(1)
//         leer arreglo(2)
//         leer arreglo(3)
//         leer arreglo(4)
//         medio <- 2
//         Escribir "El primer elemento es:", arreglo(0)
//         Escribir "El elemento del medio es:", arreglo(medio)
//         Escribir "El último elemento es:", arreglo(4)
// Salida:mostrar mensaje

// Pseudocodigo:
// InicioAlgoritmo
//  Dimensión arreglo(5)
//  Leer arreglo(0)
//  leer arreglo(1)
//  leer arreglo(2)
//  leer arreglo(3)
//  leer arreglo(4)
//  medio <- 2
//  Escribir "El primer elemento es:", arreglo(0)
//  Escribir "El elemento del medio es:", arreglo(medio)
//  Escribir "El último elemento es:", arreglo(4)
// FinAlgoritmo

const prompt = require('prompt-sync')();

function ejercicio_14() {
    const arreglo = [];
    arreglo[0] = prompt("Ingrese el primer elemento del arreglo:");
    arreglo[1] = prompt("Ingrese el segundo elemento del arreglo:");
    arreglo[2] = prompt("Ingrese el tercer elemento del arreglo:");
    arreglo[3] = prompt("Ingrese el cuarto elemento del arreglo:");
    arreglo[4] = prompt("Ingrese el quinto elemento del arreglo:");
    const medio = 2;
    console.log("El primero el elemento es:", arreglo[0]);
    console.log("El elemento del medio es:", arreglo[medio]);
    console.log("El último elemento es:", arreglo[4]);
 }
 ejercicio_14();