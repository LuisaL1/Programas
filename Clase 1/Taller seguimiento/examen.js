let puntajeTotal = 0;

const preguntas = [
  {
    pregunta: "¿Cuál es la capital de Colombia?",
    respuestaCorrecta: "Bogotá"
  },
  {
    pregunta: "¿Cuántas horas tiene un día?",
    respuestaCorrecta: "24"
  },
  {
    pregunta: "¿El planeta Tierra es más grande que el planeta Marte? (responder Verdadero o Falso)",
    respuestaCorrecta: "Verdadero"
  },
  {
    pregunta: "¿De qué color es el cielo?",
    respuestaCorrecta: "Azul"
  },
  {
    pregunta: "¿Cuál es la raiz cúbica de 125?",
    respuestaCorrecta: "5"
  }
];

for (let i = 0; i < preguntas.length; i++) {
  const respuestaUsuario = prompt(preguntas[i].pregunta);

  if (respuestaUsuario === preguntas[i].respuestaCorrecta) {
    puntajeTotal += 10;
  }
}

const respuestasCorrectas = puntajeTotal / 10;
window.alert("Resultados del examen:");
window.alert(`Respuestas correctas: ${respuestasCorrectas}`);
window.alert(`Puntaje total obtenido: ${puntajeTotal}`);