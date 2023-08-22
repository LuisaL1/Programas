const costoServicio = 500;
let montoTotal = 0;

while (true) {
  const tipoPago = prompt("Ingrese el tipo de pago (moneda o billete):");

  if (tipoPago == "moneda") {
    const valorMoneda = prompt("Ingrese el valor de la moneda (500 o 1000):");
    if (valorMoneda == 500 || valorMoneda == 1000) {
      montoTotal += valorMoneda;
    } else {
      alert("Valor de moneda no válido");
    }
  } else if (tipoPago == "billete") {
    const valorBillete = prompt("Ingrese el valor del billete (2000 o 5000):");
    if (valorBillete == 2000 || valorBillete == 5000) {
      montoTotal += valorBillete;
    } else {
      alert("Valor de billete no válido");
    }
  } else {
    alert("Tipo de pago no válido");
  }

  if (montoTotal >= costoServicio) {
    if (montoTotal > costoServicio) {
      const cambio = montoTotal - costoServicio;
      alert(`¡Gracias por su pago! Su cambio es de ${cambio} pesos.`);
    } else {
      alert("¡Gracias por su pago! No se necesita devolver cambio.");
    }
    break;
  } else {
    const faltaDinero = costoServicio - montoTotal;
    alert(`Falta dinero para completar el pago. Faltan ${faltaDinero} pesos.`);
  }
}

alert("¡Vuelve pronto!");