// 4. Pedir al usuario un número y mostrar su doble
// Entrada: Ingresar numero, numero(leer), doble(calcular)
// Proceso: doble = numero * 2
// Salida: Mostrar la multiplicacion del numero
//
// Pseudocodigo:
// InicioAlgoritmo multiplicacion
//  Escribir "Ingrese un numero:"
//  Leer numero
//  doble = numero * 2
//  Escribir "El doble del número ingresado es:" doble
// FinAlgoritmo
//
const prompt = require('prompt-sync')();
const write = console.log
function _ejercicio_4(){
    let numero = Number(prompt("Ingrese un numero:"));
    let doble = numero * 2;
    write("El doble del número ingresado es:", doble);
}
_ejercicio_4();
