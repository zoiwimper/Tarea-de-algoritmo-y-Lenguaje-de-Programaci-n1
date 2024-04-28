// 14.	Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos.
// Entrada: nota_examen=0(leer)
// Proceso:Si nota_examen >= 60 entonces
//           Escribir "Felicidades, usted ha aprobado!"
//         Sino 
//           Escribir "Lamentamos decirle que no ha aprobado el examen."
//         FinSi
// Salida: mostrar mensaje

// Pseudocodigo:
// InicioAlgoritmo ejercicio_14
//  Escribir "Ingrese su nota de examen para confirmar si aprobó o no:"
//  Leer nota_examen
//  Si nota_examen >= 60 entonces
//    Escribir "Felicidades, usted ha aprobado!"
//  Sino 
//    Escribir "Lamentamos decirle que no ha aprobado el examen."
//  FinSi
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log

function ejercicio_14(){
    let nota_examen = prompt("Ingrese su nota de examen para confirmar si aprobó o no:")
    nota_examen = parseInt(nota_examen)
    if (nota_examen >= 60){
        write("Felicidades, usted ha aprobado!")
    }
    else{
        write("Lamentamos decirle que no ha aprobado el examen.")
    }
}

ejercicio_14();