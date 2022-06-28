/*let nombre = prompt("Ingresa tu nombre")
if(nombre == "Maxi"){
    alert("Tu nombre es : " + nombre)
}
else{
    console.log("Tu nombre no es maxi")
}

//--------------------------------------

let valor = prompt("Ingresa un numero")
if(valor < 20){
    alert("El valor es menor a 20")
}
else if(valor < 50){
    alert("El valor es menor a 50")
}
else{
    alert("El valor es mayor a 50")
}*/

/*for (let i = 10; i >= 0; i--){
    console.log(i)
}
console.log("Sigue el codigo")*/

/*let IngresaNumero = parseInt(prompt("Ingresa un numero"))
let resultado
for(i=1; i<=10; i++){
    resultado= IngresaNumero * i
    console.log(IngresaNumero + " x " + i + " = " + resultado)

}*/
/*for(i=1; i<=20; i++){
    let nombre = prompt("Ingrese su nombre")
    console.log("Turno numero : " + i + " nombre : " + nombre)
}*/
/*for(i=0; i<10; i++){
    if(i==5){
        continue
    }
    if(i==8){
        continue
    }
    
    console.log( i)
}*/
/*let nombres = ["Maxi","Marcelo","Claudio","German","Mariana","Jorge"]
console.log(nombres.length)
for(i=0; i<nombres.length; i++){
    console.log(nombres[i])
}*/
/*let repetir = true
while(repetir){
    console.log("Al infinito y más allá")
}*/
/*let entrada = prompt("Imgrese un nombre")
while(entrada != "esc"){
    console.log(entrada)
    entrada = prompt("Imgrese un nombre")
}*/
/*let repetir = false
do{
    console.log("Entra una vez")
}
while(repetir)*/

/*let numero = 0
do {
    numero = prompt("Ingrese un dato")
    if(numero!="esc"){
        alert(numero)
    }
    else{
        alert("Fin del bucle")
    }
} while (numero!="esc");*/

/* Promedio de alumnos */

let acumulador=0
let cuentaNota=0
let continuar=0
do {
    let nota = parseFloat(prompt("Ingrese una nota"))
    if(nota>=1 && nota<=10){
        acumulador += nota
        cuentaNota++
    }
    else{
        alert("Ingrse un dato")
    }
    continuar = prompt("Desea seguir?").toLocaleLowerCase()

} while (continuar!="no");

alert("El promedio de la nota es = " + (acumulador / cuentaNota))