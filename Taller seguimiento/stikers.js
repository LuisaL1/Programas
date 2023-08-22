const precioP = 4000;
const precioG = 6000;

window.alert("Bienvenido a StikerMake, un lugar donde haremos de tu logo la mejor presentación.");

let tamaño = prompt("Selecciona el tamaño del sticker.\n1. Pequeño\n2. Grande");
let cantidad = prompt("Vendemos desde\n1. 10 und\n2. 20 und\n3. 30 und");

if (tamaño === "1" && cantidad === "1") {
    window.alert(`Gracias por su compra, recibo por compra de un paquete de stickers pequeños x 10 und $${precioP * 10}`);
} else if (tamaño === "1" && cantidad === "2") {
    window.alert(`Gracias por su compra, recibo por compra de un paquete de stickers pequeños x 20 und $${precioP * 20}`);
} else if (tamaño === "1" && cantidad === "3") {
    window.alert(`Gracias por su compra, recibo por compra de un paquete de stickers pequeños x 30 und $${precioP * 30}`);
} else if (tamaño === "2" && cantidad === "1") {
    window.alert(`Gracias por su compra, recibo por compra de un paquete de stickers grandes x 10 und $${precioG * 10}`);
} else if (tamaño === "2" && cantidad === "2") {
    window.alert(`Gracias por su compra, recibo por compra de un paquete de stickers grandes x 20 und $${precioG * 20}`);
} else if (tamaño === "2" && cantidad === "3") {
    window.alert(`Gracias por su compra, recibo por compra de un paquete de stickers grandes x 30 und $${precioG * 30}`);
} else {
    window.alert("Selección inválida. Por favor, elige una opción válida.");
}
