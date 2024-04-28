// 11. Solicitar al usuario una distancia en metros y mostrarla en centrímetros.
// Entrada: ingresar distancia(leer), distancia_centimetros(calcular)
// Proceso: distancia_centimetros = distancia_metros * 100
//  Escribir "La distancia ingresada es de", distancia_centimetros, "centímetros."
// Salida: mostrar el cálculo

// Pseudocodigo:
// InicioAlgoritmo ejercicio_11
//  Escribir "Bienvenido, digite una distancia en metros:"
//  leer distancia_metros
//  distancia_centimetros = distancia_metros * 100
//  Escribir "La distancia ingresada es de", distancia_centimetros, "centímetros."
// FinAlgoritmo


 const read = require('prompt-sync')();

 const write = console.log

 function ejercicio_11(){

    distancia_metros = read("Bienvenido, digite una distancia en metros:");
    distancia_centimetros = distancia_metros * 100;
    write ("La distancia ingresada es de", distancia_centimetros, "centímetros.");
 }

 ejercicio_11();