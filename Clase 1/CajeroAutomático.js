const retiro = 1;
const consignacion = 2;
const consultaDeSaldo = 3;
const saldoEnLaCuenta = 100000;
const retiroUno = 20000;
const retiroDos = 50000;
const retiroTres = 100000;
const retiroCuatro = 200000;
const montoUno = 20000;
const montoDos = 50000;
const montoTres = 100000;
const montoCuatro = 200000;

let numeroDocumento = prompt("Por favor ingrese su número de documento:");
console.log("Número de documento ingresado:", numeroDocumento);

let claveProducto = prompt("Por favor, ingrese la clave del producto:");
console.log("Clave del producto ingresada:", claveProducto);

console.log(`Bienvenido al sistema, ${numeroDocumento}. ¿Cómo podemos ayudarte?`);
let comoPodemosAyudarte = prompt("¿Cómo podemos ayudarte?: 1. Realizar retiros, 2. Consignar, 3. Consultar saldo");

if (comoPodemosAyudarte == "1") {
    let cuantoDeseaRetirar = prompt("¿Cuánto desea retirar? 1. $20,000, 2. $50,000, 3. $100,000, 4. $200,000");
    if (cuantoDeseaRetirar == "1") {
        console.log("Transacción exitosa, por favor espera un momento...");
        window.alert(`Su nuevo saldo es: ${saldoEnLaCuenta - retiroUno}`);
    } else if (cuantoDeseaRetirar == "2") {
        console.log("Transacción exitosa, por favor espere un momento...");
        window.alert(`Su nuevo saldo es: ${saldoEnLaCuenta - retiroDos}`);
    } else if (cuantoDeseaRetirar == "3") {
        console.log("Transacción exitosa, por favor espere un momento...");
        window.alert(`Su nuevo saldo es: ${saldoEnLaCuenta - retiroTres}`);
    } else if (cuantoDeseaRetirar == "4") {
        console.log("Transacción exitosa, por favor espere un momento...");
        window.alert(`Su nuevo saldo es: ${saldoEnLaCuenta - retiroCuatro}`);
    } else {
        console.log("Opción no reconocida");
    }
} else if (comoPodemosAyudarte == "2") {
    let montoConsignacion = prompt("¿Cuánto desea consignar? 1. $20,000, 2. $50,000, 3. $100,000, 4. $200,000");
    if (montoConsignacion == "1") {
        console.log("Transacción exitosa, por favor espere un momento...");
        window.alert(`Su nuevo saldo es: ${saldoEnLaCuenta + montoUno}`);
    } else if (montoConsignacion == "2") {
        console.log("Transacción exitosa, por favor espere un momento...");
        window.alert(`Su nuevo saldo es: ${saldoEnLaCuenta + montoDos}`);
    } else if (montoConsignacion == "3") {
        console.log("Transacción exitosa, por favor espere un momento...");
        window.alert(`Su saldo nuevo es: ${saldoEnLaCuenta + montoTres}`);
    } else if (montoConsignacion == "4") {
        console.log("Transacción exitosa, por favor espere un momento...");
        window.alert(`Su saldo nuevo es: ${saldoEnLaCuenta + montoCuatro}`);
    } else {
        console.log("Opción no reconocida");
    }
} else if (comoPodemosAyudarte == "3") {
    window.alert(`Su saldo es: ${saldoEnLaCuenta}`);
} else {
    console.log("Opción no reconocida");
}

let imprimirRecibo = prompt("¿Desea imprimir recibo de la transacción? 1. Si, 2. No");
if (imprimirRecibo == "1") {
    console.log("Imprimiendo recibo, gracias por usar nuestros servicios");
} else {
    console.log("Gracias por usar nuestros servicios");
}
