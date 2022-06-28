/* Calculadora */

let numero1,numero2,operaciones

do {
    numero1=parseFloat(prompt("Ingresa un numero"))
    numero2=parseFloat(prompt("Ingresa otro numero"))
    operaciones=prompt("Ingresa un operador : +,-,*,/")
    if(isNaN(numero1) || isNaN(numero2)){

        alert("No es una operacion valida")

    }
} while (isNaN(numero1) || isNaN(numero2));

switch (operaciones) {
    case "+":
        alert ("La suma de " + numero1 + " y " + numero2 + " es = " + (numero1 + numero2))
        break;
    case "-":
        alert ("La resta de " + numero1 + " y " + numero2 + " es = " + (numero1 - numero2))
         break;
    case "*":
        alert ("La multiplicacion de " + numero1 + " y " + numero2 + " es = " + (numero1 * numero2))
         break;
    case "/":
        alert ("La division de " + numero1 + " y " + numero2 + " es = " + (numero1 / numero2))
         break
    default:
        alert("No es una operacion valida")
        break;
}