// 18.	“Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
// El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100 pero menor o igual a 200, el costo es de $15.00.  Para más de 200 personas el costo por platillo es de $10.00.
// Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar un evento, considerando que al total hay que agregarle el 15% del iva.

// Entrada:Proceso Presupuesto_Banquetes
//         Definir costo_por_persona, presupuesto_sin_iva, presupuesto_con_iva Como Real
//         Definir numero_de_personas Como Entero
// Proceso:Escribir "Digite el número de personas que asistirán al evento: "
//         Leer numero_de_personas
//         Si numero_de_personas <=100 entonces
//           costo_por_persona = 20.00
//         Sino Si numero_de_personas <=200 entonces
//           costo_por_persona = 15.00
//         Sino
//           costo_por_persona = 10.00
//         FinSi
//         presupuesto_sin_iva = numero_de_personas * costo_por_persona
//         presupuesto_con_iva = presupuesto_sin_iva * 1.15
//         Escribir "El presupuesto a presentar al cliente es: $", presupuesto_con_iva
//        FinProceso
// Salida: presupuesto_con_iva

// Pseudocódigo:
// InicioAlgoritmo ejercicio_18
//  Definir costo_por_persona, presupuesto_sin_iva, presupuesto_con_iva Como Real
//  Definir numero_de_personas Como Entero
//  Escribir "Digite el número de personas que asistirán al evento: "
//  Leer numero_de_personas
//  Si numero_de_personas <=100 entonces
//    costo_por_persona = 20.00
//  Sino Si numero_de_personas <=200 entonces
//    costo_por_persona = 15.00
//  Sino
//    costo_por_persona = 10.00
//  FinSi
//  presupuesto_sin_iva = numero_de_personas * costo_por_persona
//  presupuesto_con_iva = presupuesto_sin_iva * 1.15
//  Escribir "El presupuesto a presentar al cliente es: $", presupuesto_con_iva
// FinProceso
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log

function ejercicio_18(){
    let costo_por_persona=0.0, presupuesto_sin_iva=0.0, presupuesto_con_iva=0.0, numero_de_personas=0
    numero_de_personas = parseInt(prompt("Digite el número de personas que asisteirán al evento: "))
    if (numero_de_personas <=100){
        costo_por_persona = 20.00
    }
    else if (numero_de_personas <=200){
        costo_por_persona = 15.00
    }
    else{
        costo_por_persona = 10.00
    }
    presupuesto_sin_iva = numero_de_personas * costo_por_persona
    presupuesto_con_iva = presupuesto_sin_iva * 1.15
    write("El presupuesto a presentar al cliente es: $", presupuesto_con_iva.toFixed(2))
    write("Gracias por preferirnos.")
}

ejercicio_18();