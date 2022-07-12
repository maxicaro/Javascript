/* Aplicacion de combos 1, 2, y 3 de hamburguesas */

const nombre = prompt("Ingresa tu nombre")

let precio = 0

alert("Hola " + nombre + " Bienvenido a Hamburguesas X !!!")

let combo = prompt("Por favor ingresa tu combo=1 combo=2 o combo=3, muchas gracias!!!")


function comboBurger(){

while (combo != 1 && combo != 2  && combo != 3) {
    alert("El combo no existe")
    combo = prompt("Por favor ingresa tu combo=1 combo=2 o combo=3, muchas gracias!!!!")
}
if (combo == 1) {
    precio = 900
} else if(combo == 3){
    precio = 1800
    alert("El combo 3 viene con una cajita Feliz de regalo!!!")
}else{
    precio = 600
}

alert("El precio de tu combo es : " + precio + " pesos. ")

pagoDeCombo()

}

function pagoDeCombo(){

let dinero = prompt("Con cuanto vas a pagar?")

while (dinero < precio) {
    alert("El pago es insuficiente")
    dinero = prompt("Con cuanto vas a pagar?")
}

let vuelto = dinero - precio

alert("Su pago es de " + dinero + " pesos y su vuelto es de " + vuelto + " pesos." )
alert("Gracias " + nombre + " por confiar en nosotros!!!")

}


comboBurger()

