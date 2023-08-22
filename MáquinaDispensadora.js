const galletaOreo = 1;
const cocaCola = 2;
const cantOreo = 2;
const cantCocacola = 3;
const precioGalleta = 2800;
const precioBebida = 3000;
const billeteUno = 2000;
const billeteDos = 5000;
const billeteTres = 10000;

window.alert("Hola, soy SweetBot, ¡tu máquina dispensadora favorita!");
window.alert("Te indicaré una sola instrucción para una mejor experiencia");
window.alert("El dinero que se puede ingresar: $2.000, $5.000, $10.000, ¡disfruta!");

let queDesea = prompt("¿Qué desea hoy?: 1. Galletas Oreo $2800 2. CocaCola $3000");

if (queDesea === "1") {
    let repetir = true;
    while (repetir) {
        let pagoRealizado = prompt("Por favor, digite el número del valor a ingresar: 1.$2000, 2.$5000, 3.$10000");
        if (pagoRealizado === "1") {
            window.alert("Ups!, por favor ingresa otro valor");
        } else if (pagoRealizado === "2") {
            let cantidadDeseada = prompt("Unidades disponibles: 1, 2, 3, 4");
            if (cantidadDeseada === "4") {
                window.alert("Ups, cantidad no disponible :(");
            } else if (cantidadDeseada > cantOreo) {
                window.alert("Ups!, cantidad no disponible :(");
            } else {
                let resultadoFinal = cantidadDeseada * precioGalleta;
                if (resultadoFinal > billeteDos) {
                    window.alert("Ups, el billete no es suficiente :(");
                } else {
                    window.alert(`Ñam!, Dispensando con éxito, su cambio es: ${billeteDos - resultadoFinal}`);
                    repetir = false;
                }
            }
        } else {
            let cantidadDeseada = prompt("Unidades disponibles: 1, 2, 3, 4");
            let resultadoFinal = cantidadDeseada * precioGalleta;
            if (cantidadDeseada === "4") {
                window.alert("Ups, cantidad no disponible :(");
            } else if (resultadoFinal > billeteTres) {
                window.alert("Ups, el billete no es suficiente :(");
            } else {
                window.alert(`Ñam!, Dispensando con éxito, su cambio es: ${billeteTres - resultadoFinal}`);
                repetir = false;
            }
        }
    }
} else if (queDesea === "2") {
    let repetir = true;
    while (repetir) {
        let pagoRealizado = prompt("Por favor, digite el número del valor a ingresar: 1.$2000, 2.$5000, 3.$10000");
        if (pagoRealizado === "1") {
            window.alert("Ups!, por favor ingresa otro valor");
        } else if (pagoRealizado === "2") {
            let cantidadDeseada = prompt("Unidades disponibles: 1, 2, 3, 4");
            if (cantidadDeseada === "4") {
                window.alert("Ups, cantidad no disponible :(");
            } else if (cantidadDeseada > cantCocacola) {
                window.alert("Ups!, cantidad no disponible :(");
            } else {
                let resultadoFinal = cantidadDeseada * precioBebida;
                if (resultadoFinal > billeteDos) {
                    window.alert("Ups, el billete no es suficiente :(");
                } else {
                    window.alert(`Ñam!, Dispensando con éxito, su cambio es: ${billeteDos - resultadoFinal}`);
                    repetir = false;
                }
            }
        } else {
            let cantidadDeseada = prompt("Unidades disponibles: 1, 2, 3, 4");
            let resultadoFinal = cantidadDeseada * precioBebida;
            if (cantidadDeseada === "4") {
                window.alert("Ups, cantidad no disponible :(");
            } else if (resultadoFinal > billeteTres) {
                window.alert("Ups, el billete no es suficiente :(");
            } else {
                window.alert(`Ñam!, Dispensando con éxito, su cambio es: ${billeteTres - resultadoFinal}`);
                repetir = false;
            }
        }
    }
}




 







    
   

   
    




   
    









