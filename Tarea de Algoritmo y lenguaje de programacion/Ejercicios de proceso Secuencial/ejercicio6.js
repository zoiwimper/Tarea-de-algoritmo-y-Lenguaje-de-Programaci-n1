// 6.Pedir al usuario dos números y mostrar el resultado de multiplicarlos
// Entrada: numero1=""(leer), numero2=""(leer), resultado(proceso)
// Proceso: resultado = numero1 * numero2
//          Escribir "El resultado de multiplicar", numero1, "por", numero2, "Es igual a", resultado
// Salida: resultado

// Pseudocodigo:
// InicioAlgortimo ejercicio_6
//  Escribir "Bienvenido, ingresa el primer número:"
//  Leer numero1
//  Escribir "Ahora, ingresa el segundo numero:"
//  resultado = numero1 * numero2
//  Escribir "El resultado de multiplicar", numero1, "por", numero2, "Es igual a", resultado
// FinAlgoritmo

 const prompt = require('prompt-sync')();
 const write = console.log
function ejercicio_6(){
     numero1 = prompt("Bienvenido, ingresa el primer número:");
     numero2 = prompt("Ahora, ingreas el segundo número:");
     resultado = numero1 * numero2
     write("El resultado de multiplicar", numero1, "por", numero2, "es igual a", resultado)
 }
 ejercicio_6();