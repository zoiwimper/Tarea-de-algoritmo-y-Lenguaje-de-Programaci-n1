// 22.Dado un arreglo de 5 elementos presentar la suma de dichos elementos
// Entrada: arregloSumaElementos = [12,6,7,22,5]
// Proceso: arregloSumaElementos = arregloSumaElementos[0] + arregloSumaElementos[1] + arregloSumaElementos[2] + arregloSumaElementos[3] + arregloSumaElementos[4]
// Salida: suma_total

// Pseudocódigo:
// InicioAlgoritmo
//  Definir num1, num2, num3, num4, num5, Total Entero
//  num1=12; num2=6; num3=7; num4=22; num5=5; suma_total=0
//  Escribir num1,", ", num2,", ", num3,", ", num4,", ", num5
//  total = num1+num2+num3+num4+num5
//  Escribir "Dado el siguiente arreglo:"
//  Escribir "[", num1,", ", num2,", ", num3,", ", num4,", ", num5, "]"
//  Escribir "La suma de estos elementos es: ", suma_total
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log;

function ejercicio_22(){
    let arregloSumaElementos = [12,6,7,22,5], suma_total = 0
    suma_total = arregloSumaElementos[0] + arregloSumaElementos[1] + arregloSumaElementos[2] + arregloSumaElementos[3] + arregloSumaElementos[4]
    write("Dado el siguiente arreglo:")
    write(arregloSumaElementos)
    write("La suma de los elementos anteriormente ingresados es: ", suma_total )
}

ejercicio_22();