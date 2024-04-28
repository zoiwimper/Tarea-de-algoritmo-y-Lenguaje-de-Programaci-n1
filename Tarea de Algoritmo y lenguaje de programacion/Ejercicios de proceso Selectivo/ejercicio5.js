// 5.	Pedir al usuario dos números y mostrar si son iguales o diferentes.
// Entrada: num1=0(Leer), num2=0(Leer)
// Proceso: si num1 == num2 entonces
//             Escribir "Los números ingresados son iguales."
//          sino
//             Escribir "Los números ingresados son diferentes."
//          FinSi
//          Escribir "Tenga un buen día."
// Salida: mostrar el resultado.

// Pseudocodigo:
// InicioALgoritmo ejercicio_5
//  Escribir "Inserte el primero de los dos números que desea ver su igualdad:"
//  Leer num1
//  Escribir "Ahora, de igual manera inserte el segundo número:"
//  Leer num2
//  Si num1 == num2 entonces
//    Escribir "Los números ingresados son iguales."
//  Sino
//    Escribir "Los números ingresados son diferentes."
//  FinSi
//  Escribir "Tenga un buen día."
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log

function ejercicio_5(){
    let num1 = Number(prompt("Inserte el primero de los dos números que desea ver su igualdad:"));
    let num2 = Number(prompt("Ahora, de igual manera inserte el segundo número:"));
    if(num1 == num2){
        write("Los números ingresados son iguales.")
    }
    else{
        write("Los números ingresados son diferentes.")
    }
    write("Tenga un buen día.")
}

ejercicio_5();
