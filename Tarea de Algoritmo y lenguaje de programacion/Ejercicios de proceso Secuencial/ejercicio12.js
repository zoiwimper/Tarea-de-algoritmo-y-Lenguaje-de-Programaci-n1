// 12. Pedir 5 números y asignarlos en un arreglo.
// Entrada: definir los numeros ingresados en arreglo(leer) 
// Proceso: Para i desde 0 hasta 4
//          Escribir "Inserte el número", i+1, ":"
//          Leer numero
//          arreglo [i] = numero
//          FinPara
//          Escribir "Los números ingresados son:"
//          Para i desde 0 hasta 4
//           Escribir arreglo[i]
//          FinPara
// Salida: Mostrar los numeros asignados en un arreglo

// Pseudocodigo:
// InicioAlgoritmo ejercicio_12
//  Definir arreglo[5]
//  Para i desde 0 hasta 4
//  Escribir "Inserte el número", i+1, ":"
//  Leer numero
//  arreglo [i] = numero
//  FinPara
//  Escribir "Los números ingresados son:"
//  Para i desde 0 hasta 4
//   Escribir arreglo[i]
//  FinPara
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log
function ejercicio_12(){
    const arreglo = new Array(5)
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = read("Inserte el número " + (i+1) + ":");
    }
    write("Los números ingresados son:");
    for (let i =0; i < arreglo.length; i++) {
        console.log(arreglo[i])
    }
}

ejercicio_12();