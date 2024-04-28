// 4.	Solicitar al usuario un número y mostrar si es positivo o negativo.
// Entrada: numero=0(leer)
// Proceso: numero > 0
//          Si numero > 0 entonces
//            Escribir "El número ingresado es positivo."
//          Si numero < 0 entonces
//            Escribir "El número ingresado es negativo."
//          Sino
//            Escribir "El número ingresado es cero."
//          FinSi
//          Escribir "Gracias por su confiabilidad en nosotros para verificar su número."
// Salida: mostrar el mensaje

// Pseudocodigo:
// InicioAlgoritmo ejercicio_4
//  Escribir "Ingresa el número que deseas ver si es positivo o negativo:"
//  Leer numero
//  Si numero > 0 entonces
//    Escribir "El número ingresado es positivo."
//  Si numero < 0 entonces
//    Escribir "El número ingresado es negativo."
//  Sino
//    Escribir "El número ingresado es cero."
//  FinSi
//  Escribir "Gracias por su confiabilidad en nosotros para verificar su número."
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log;

function ejercicio_4(){
    let numero = Number(prompt("Ingresa el número que desesas ver si es positivo o negativo:"));
    if(numero > 0){
        write("El número ingresado es positivo.");
    }
    else if(numero < 0){
        write("El número ingresado es negativo");
    }
    else{
        write("El número ingresado es cero.");
    }
    write("Gracias por su confiabilidad en nosotros para verificar su número.")
}
ejercicio_4();
