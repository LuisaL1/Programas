const límiteDías = 3;
const multapordíaL = 500;
const multapordíaR = 600;
const multaPérdida = 10000;

let indicar = prompt("Bienvenido al sistema, por favor indique cuál es el motivo de su consulta. \n1. Devoluciones \n2. Pérdidas");

if (indicar == "1") {
    let tipo = prompt("\n1. Libros \n2. Revistas");

    if (tipo == "1") {
        let diasRetrasados = prompt("Por favor indique los días de retraso");
        let cantidadLibros = prompt("Por favor indique la cantidad de libros 1. 2. 3.");

        if (cantidadLibros == "1") {
            if (diasRetrasados > límiteDías) {
                window.alert(`Superaste el máximo de días retrasados, multa por cada día de retraso $500, su multa es de $${diasRetrasados * multapordíaL}`);
            }
        } else if (cantidadLibros == "2") {
            let multaPorLibro = multapordíaL * 2;
            window.alert(`Superaste el máximo de días retrasados, multa por cada día de retraso $500, su multa es de $${diasRetrasados * multaPorLibro}`);
        } else {
            let multaPorLibro2 = multapordíaL * 3;
            window.alert(`Superaste el máximo de días retrasados, multa por cada día de retraso $500, su multa es de $${diasRetrasados * multaPorLibro2}`);
        }
    } else {
        let diasRetrasados = prompt("Por favor indique los días de retraso");
        let cantidadRevistas = prompt("Por favor indique la cantidad de revistas 1. 2. 3.");

        if (cantidadRevistas == "1") {
            window.alert(`Superaste el máximo de días retrasados, multa por cada día de retraso $600, su multa es de $${diasRetrasados * multapordíaR}`);
        } else if (cantidadRevistas == "2") {
            let multaPorRevista = multapordíaR * 2;
            window.alert(`Superaste el máximo de días retrasados, multa por cada día de retraso $600, su multa es de $${diasRetrasados * multaPorRevista}`);
        } else {
            let multaPorRevista2 = multapordíaR * 3;
            window.alert(`Superaste el máximo de días retrasados, multa por cada día de retraso $600, su multa es de $${diasRetrasados * multaPorRevista2}`);
        }
    }
} else {
    let tipo = prompt("\n1. Libros \n2. Revistas");
    
    if (tipo == "1") {
        let cantidadL = prompt("Por favor indique la cantidad de libros 1. 2. 3.");
        
        if (cantidadL == "1") {
            window.alert("Su multa por el ejemplar perdido es de $1000");
        } else if (cantidadL == "2") {
            let perdidaLibro = multaPérdida * 2;
            window.alert(`Su multa por cada ejemplar perdido es de $${perdidaLibro}`);
        } else {
            let perdidaLibro2 = multaPérdida * 3;
            window.alert(`Su multa por el ejemplar perdido es de $${perdidaLibro2}`);
        }
    } else {
        let cantidadR = prompt("Por favor indique la cantidad de Revistas 1. 2. 3.");
        
        if (cantidadR == "1") {
            window.alert("Su multa por el ejemplar perdido es de $1000");
        } else if (cantidadR == "2") {
            let perdidaRevista = multaPérdida * 2;
            window.alert(`Su multa por cada ejemplar perdido es de $${perdidaRevista}`);
        } else {
            let perdidaRevista2 = multaPérdida * 3;
            window.alert(`Su multa por cada ejemplar perdido es de $${perdidaRevista2}`);
        }
    }
}


