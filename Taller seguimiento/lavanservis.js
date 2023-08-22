const lavadoS = 4000;
const lavadoN = 3000;
const planchado = 2000;
const domicilioP = 4000;

window.alert("Bienvenido a lavanservis, ¡un sitio donde mantendremos tu ropa bien CLEAN!");

let menúPrincipal = prompt("¿Qué servicio requiere el día de hoy?\n1. Lavado\n2. Planchado");

if (menúPrincipal == "1") {
    let tipo = prompt("Selecciona tipo de lavado\n1. En seco\n2. Normal");
    let cantidad = prompt("Cantidad de prendas:\n1. Prenda\n2. Prendas\n3. Prendas");

    if (tipo == "1" && cantidad == "1") {
        window.alert(`Gracias por usar nuestros servicios, recibo por prestación de servicio de lavado en seco $${lavadoS}, con servicio a domicilio gratuito. ¡Que lo disfrutes!`);
    } else if (tipo == "1" && cantidad == "2") {
        window.alert(`Gracias por usar nuestros servicios, recibo por prestación de servicio de lavado en seco $${lavadoS * 2}, con servicio a domicilio gratuito. ¡Que lo disfrutes!`);
    } else if (tipo == "1" && cantidad == "3") {
        window.alert(`Gracias por usar nuestros servicios, recibo por prestación de servicio de lavado en seco $${lavadoS * 3}, con servicio a domicilio gratuito. ¡Que lo disfrutes!`);
    } else if (tipo == "2" && cantidad == "1") {
        window.alert(`Gracias por usar nuestros servicios, recibo por prestación de servicio de lavado normal $${lavadoN}, con servicio a domicilio gratuito. ¡Que lo disfrutes!`);
    } else if (tipo == "2" && cantidad == "2") {
        window.alert(`Gracias por usar nuestros servicios, recibo por prestación de servicio de lavado normal $${lavadoN * 2}, con servicio a domicilio gratuito. ¡Que lo disfrutes!`);
    } else if (tipo == "2" && cantidad == "3") {
        window.alert(`Gracias por usar nuestros servicios, recibo por prestación de servicio de lavado normal $${lavadoN * 3}, con servicio a domicilio gratuito. ¡Que lo disfrutes!`);
    } else {
        window.alert("Selección inválida. Por favor, elige una opción válida.");
    }
} else if (menúPrincipal == "2") {
    let cantidad = prompt("Cantidad de prendas:\n1. Prenda\n2. Prendas\n3. Prendas");

    if (cantidad == "1") {
        window.alert(`Gracias por usar nuestros servicios, recibo por prestación de servicio de planchado $${planchado}, con un costo adicional del domicilio $${domicilioP}, TOTAL: $${planchado + domicilioP}`);
    } else if (cantidad == "2") {
        let planchado2 = planchado * 2;
        window.alert(`Gracias por usar nuestros servicios, recibo por prestación de servicio de planchado $${planchado2}, con un costo adicional del domicilio $${domicilioP}, TOTAL: $${planchado2 + domicilioP}`);
    } else if (cantidad == "3") {
        let planchado3 = planchado * 3;
        window.alert(`Gracias por usar nuestros servicios, recibo por prestación de servicio de planchado $${planchado3}, con un costo adicional del domicilio $${domicilioP}, TOTAL: $${planchado3 + domicilioP}`);
    } else {
        window.alert("Selección inválida. Por favor, elige una opción válida.");
    }
} else {
    window.alert("Selección inválida. Por favor, elige una opción válida.");
}



