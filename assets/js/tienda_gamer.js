
/* TIENDA ONLINE DE PC Y GRAFICAS */

//Solicitamos su nombre
let nombre = prompt("¿Cómo te llamas?!!!");

//Saludamos al cliente - Importante usar template strings `string ${variable} string`
alert(`Hola ${nombre}, bienvenido a PC gamer tu tienda online!!!`);

let total = 0;
let pagoCuenta = 0;
let graficasCompradas = [];
let cantidad = 0;

let graficas = [
    {
        id: 1,
        nombre: "PlacaGeForceX",
        precio: 200000,
        stock: 1000,
        marca: "Nividia"
    },
    {
        id: 2,
        nombre: "RxVega64",
        precio: 250000,
        stock: 800,
        marca: "Amd"
    },
    {
        id: 3,
        nombre: "RtX3090",
        precio: 300000,
        stock: 2000,
        marca: "Nividia"
    }

]

//Función para pedir la grafica.
function pedirGrafica() {

    //Preguntamos que grafica desea, 1 - 2 - 3.
    let grafica = prompt("¿Qué targeta grafica te gusta 1, 2 o 3 (1- PlacaGeForceX / 2- RxVega64 / 3- RtX3090) ?");

    //Si la grafica seleccionada existe, la buscamos en nuestro array de graficas.
    if (grafica <= 3 && grafica >= 1) {

        //Preguntamos cantidad de graficas a comprar.
        cantidad = parseInt(prompt("¿Cuántas unidades quieres?!!!"));

        //Si la cantidad no es un nùmero invocamos la función salir o pedir otra grafica.
        if (isNaN(cantidad)) {
            alert("No tenemos esa cantidad de placas de videos");
            return clienteSale()
        }

        //Buscamos el precio de la grafica seleccionada y multiplicamos por la cantidad.
        let pagar = graficas.find(gra => gra.id == grafica).precio * cantidad;

        //Buscamos el nombre de la grafica seleccionada.
        let graficaSelect = graficas.find(gra => gra.id == grafica).nombre;

        //Condicional para verificar que el objeto exista, en caso de que no exista, lo metemos en un array
        if ( graficasCompradas.some(gra => gra.nombre == graficaSelect)) {
            graficasCompradas.find(gra => gra.id == grafica).qty += cantidad

        //Si el objeto existe, solo le sumamos la cantidad.
        } else {
            graficasCompradas.push(graficas.find(gra => gra.id == grafica))
            graficasCompradas.find(gra => gra.id == grafica).qty = cantidad
        }

        total += pagar;
        alert(`Compraste ${cantidad}unidad de ${graficaSelect} el precio es de ${pagar} y tenes un total de ${total} pesos`);
        //Llamamos a la función para que el cliente pueda seguir comprando o pagar e irse.
        clienteSale()
    } else {
        //Al elegir una grafica que no existe, invocamos la función para que pueda volver a intentarlo o irse.
        alert("No tenemos esa placa de video");
        clienteSale()
    }
}

//Funcion para que el cliente pueda seguir comprando o pagar e irse.
function clienteSale() {
    let salir = prompt("¿Quieres irte de nuestra tienda? (s/n)");
    if (salir == "s") {
        pagarCuenta()
    } else {
        pedirGrafica();
    }
}

//Función para pagar la cuenta.
function pagarCuenta() {
    alert(`Tu total es de ${total}`);

    //Bucle para que el cliente pueda pagar o volver a intentarlo.
    do {
        pagoCuenta = prompt("¿Cuánto vas a pagar?");
        if (pagoCuenta >= total) {
            alert(`Gracias por confiar en PC gamer, tu cambio es de ${pagoCuenta - total}, tu pedido ya está en camino! Saludos ${nombre}!!!`);
        } else {
            alert("No tienes suficiente dinero, revisa bien tus bolsillos");
        }
    } while (pagoCuenta < total);
}

//Llamamos a la función inicial, que arrancará con nuestra app.
pedirGrafica()