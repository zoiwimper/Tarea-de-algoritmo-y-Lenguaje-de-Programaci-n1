// 10.	Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.
// Entrada: numero=0(leer), numero > 100
// Proceso:Si numero > 100 entonces
//           Escribir "El número es mayor que 100."
//         Sino Si numero < 100 entonces
//           Escribir "El número es menor que 100."
//         Sino Si numero == 100 entonces
//           Escribir "El número es igual a 100."
//         FinSi
//         Escribir "El proceso de verificación de número ha sido éxitosa.
// Salida: mostrar numero

// Pseudocodigo:
// InicioALgoritmo ejercicio_10
//  Escribir "Por favor, digite un número: "
//  Leer numero
//  Si numero > 100 entonces
//    Escribir "El número es mayor que 100."
//  Sino Si numero < 100 entonces
//    Escribir "El número es menor que 100."
//  Sino Si numero == 100 entonces
//    Escribir "El número es igual a 100."
//  FinSi
// Escribir "El proceso de verificación de número ha sido éxitosa."
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log

function ejercicio_10(){
    let numero = Number(prompt("Por favor, digite un número: "))
    if(numero > 100){
        write("El número", numero, "es mayor que 100.")
    }
    else if(numero < 100){
        write("El número", numero, "es menor que 100.")
    }
    else if(numero == 100){
        write("El número", numero, "es igual a 100.")
    }
    write("El proceso de verificación de número ha sido éxitosa.")
}

ejercicio_10();