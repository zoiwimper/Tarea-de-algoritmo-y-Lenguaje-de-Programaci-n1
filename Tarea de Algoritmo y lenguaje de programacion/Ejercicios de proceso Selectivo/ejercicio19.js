// 19.	Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento.
// Entrada: arregloNum = [15,5,6,3,19](leer)
// Proceso: arregloNum[0]>arregloNum[4]
// Salida: mostrar los arreglos

// Pseudocódigo:
// InicioAlgoritmo ejercicio_19
//  definir number1, number2, number3, number4, number5 Como Caracter
//  number1=15; number2=5; number3=6; number4=3; number5=19
//  Escribir number1,",", number2, ",", number3, ",", number4, ",", number5
//  Si number1 > number5 entonces
//    Escribir "El primer elemento es mayor que el último elemento del arreglo."
//  FinSi
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log

function ejercicio_19(){
    let arregloNum = [15,5,6,3,19]
    write("Dado el siguiente arreglo:")
    write(arregloNum)
    if (arregloNum[0]>arregloNum[4]){
        write("El primer elemento:", arregloNum[0],",", "es mayor que el último elemento del arreglo:", arregloNum[4])
    }
}

ejercicio_19();