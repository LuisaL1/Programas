let votosAnaMaria = 0;
let votosDiegoAcero = 0;


for (let i = 1; i <= 10; i++) {
    const opcionVoto = parseInt(prompt(`Votante ${i}, elige una opción de voto:\n1. Ana Maria Suarez\n2. Diego Acero`));

    if (opcionVoto == 1) {
        votosAnaMaria++;
    } else if (opcionVoto == 2) {
        votosDiegoAcero++;
    } else {
        console.log("Opción inválida de voto");
    }
}

if (votosAnaMaria > votosDiegoAcero) {
    window.alert("El ganador es Ana Maria Suarez");
} else if (votosDiegoAcero > votosAnaMaria) {
    window.alert("El ganador es Diego Acero");
} else {
    console.log("La votación terminó en empate");
}

console.log(`Resultados:\nAna Maria Suarez: ${votosAnaMaria} votos\nDiego Acero: ${votosDiegoAcero} votos`);