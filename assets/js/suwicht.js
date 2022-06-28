
 
/*let nombre = prompt("Ingrese su nombre")
while(nombre!="salir"){
if(nombre=="Ana"){
    console.log("El DNI de Ana es : 87954674")
    
}else if(nombre=="Juan"){
    console.log("El DNI de Juan es : 45698752")
    
}else if(nombre=="Marcelo"){
    console.log("El DNI de Marcelo es : 45698752")
    
}else if(nombre=="Jorge"){
    console.log("El DNI de Jorge es : 45698752")
    
}else{
    console.log("El usuario no existe")   
}
    nombre = prompt("Ingrese su nombre")
}*/
/*---------------------------------*/

let nombre = prompt("Ingrese su nombre")
        while(nombre!="esc"){
switch (nombre) {
    case "Ana":
        console.log("El DNI de Ana es : 87954674")
        break;
    case "Juan":
        console.log("El DNI de Juan es : 45698752")
        break;
    case "Marcelo":
        console.log("El DNI de Marcelo es : 45698752")
        break;
    case "Jorge":
        console.log("El DNI de Jorge es : 45698752")
        break;
    default:
        console.log("El usuario no existe")
        break;
}
        nombre = prompt("Ingrese su nombre")
        }
