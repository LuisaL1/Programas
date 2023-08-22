const equipos = [];

function calcularPuntuacion(resultado) {
    if (resultado == "victoria") {
        return 3;
    } else if (resultado == "empate") {
        return 1;
    } else {
        return 0;
    }
}

for (let i = 0; i < 3; i++) {
    const nombreEquipo = prompt(`Ingrese el nombre del equipo ${i + 1}`);
    const resultados = [];

    for (let j = 0; j < 3; j++) {
        const resultado = prompt(`Ingrese el resultado (victoria, empate o derrota) para la fecha ${j + 1} del equipo ${nombreEquipo}`);
        resultados.push(resultado);
    }

    equipos.push({
        nombre: nombreEquipo,
        puntos: resultados.reduce((total, resultado) => total + calcularPuntuacion(resultado), 0)
    });
}

equipos.sort((a, b) => b.puntos - a.puntos);

let ranking = "Ranking de equipos:\n";
for (let i = 0; i < equipos.length; i++) {
    ranking += `${i + 1}. ${equipos[i].nombre}: ${equipos[i].puntos} puntos\n`;
}

alert(ranking);