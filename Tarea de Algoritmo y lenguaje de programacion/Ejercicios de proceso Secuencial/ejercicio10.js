// 10. Pedir al usuario dos números y mostrar el mayor.
// Entrada: numero1=0(leer), numero2=0(leer)
// Proceso:Si numero1 > numero2 entonces
 //            Escribir "El número mayor es:", numero1
 //        Sino
 //            Escribir "El número mayor es:", numero2
// Salida: mostrar mensaje
 // Pseudocodigo:
 // InicioAlgotimo ejercicio_10
 //  Escribir "Bienvenido, digita el primer número:"
 //  Leer numero1
 //  Escribir "Ahora, digita el segundo número:"
 //  Leer numero2
 //  Si numero1 > numero2 entonces
 //      Escribir "El número mayor es:", numero1
 //  Sino
 //      Escribir "El número mayor es:", numero2
 // FinAlgoritmo

 const read = require('prompt-sync')();
 const write = console.log

 function ejercicio_10(){
     numero1 = read("Bienvenido, digita el primer número:");
     numero2 = read("Ahora, digita el segundo número:");
     if (numero1 > numero2){
         write("El número mayor es:", numero1);
     }else{
         write("El número mayor es:", numero2);
     }
    
 }
 ejercicio_10();