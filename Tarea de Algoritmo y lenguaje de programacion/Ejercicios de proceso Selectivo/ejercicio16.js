// 16.	Pedir al usuario su sueldo mensual y determinar su sueldo anual. Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual.
// Entrada: sueldo_mensual=0.0(leer), sueldo_anual=0.0(leer), excedente=0.0(calcular), impuesto=0.0(calcular), sueldo_neto_anual=0.0(calcular)
// Proceso: Si sueldo_anual > 30,000 entonces
//            excedente = sueldo_anual - 30,000
//            impuesto = excedente * 0.15
//            sueldo_neto_anual = sueldo_anual - impuesto
//            Escribir "Su sueldo neto anual es: ", sueldo_neto_anual
//          Sino
//            sueldo_neto_anual = sueldo_anual
//            Escribir "Sueldo neto anual es: ", sueldo_neto_anual
//          FinSi
// Salida: sueldo_anual

// Pseudocódigo:
// InicioAlgoritmo ejercicio_16
//  Escribir "Sea cordialmente bienvenido, digite su sueldo mensual: "
//  Leer sueldo_mensual
//  sueldo_anual = sueldo_mensual * 12
//  Si sueldo_anual > 30,000 entonces
//    excedente = sueldo_anual - 30,000
//    impuesto = excedente * 0.15
//    sueldo_neto_anual = sueldo_anual - impuesto
//    Escribir "Su sueldo neto anual es: ", sueldo_neto_anual
//  Sino
//    sueldo_neto_anual = sueldo_anual
//    Escribir "Sueldo neto anual es: ", sueldo_neto_anual
//  FinSi
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log

function ejercicio_16(){
    let sueldo_mensual=0.0, sueldo_anual=0.0, excedente=0.0, impuesto=0.0, sueldo_neto_anual=0.0
    sueldo_mensual = prompt("Digite su sueldo mensual: ")
    sueldo_anual = sueldo_mensual * 12
    if (sueldo_anual > 30000){
        excedente = sueldo_anual - 30000
        impuesto = excedente * 0.15
        sueldo_neto_anual = sueldo_anual - impuesto
        write("Su sueldo neto anual es: ", sueldo_neto_anual)
    }
    else{
            sueldo_neto_anual = sueldo_anual
            write("Su sueldo neto anual es: ", sueldo_neto_anual)
    }
}

ejercicio_16();