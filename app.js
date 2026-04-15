const aprendices = [
  { nombre: "Ana", nota: 4.5, programa: "ADSO" },
  { nombre: "Luis", nota: 2.8, programa: "ADSO" },
  { nombre: "Marta", nota: 3.7, programa: "Diseno Web" },
  { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
  { nombre: "Sofia", nota: 5.0, programa: "Diseno Web" }
];

const input = document.getElementById("opcion");
const output = document.getElementById("output");

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    ejecutarOpcion();
  }
});

function ejecutarOpcion() {
  const opcion = parseInt(input.value);

  switch (opcion) {
    case 1:
      mostrarTodos();
      break;

    case 2:
      mostrarAprobados();
      break;

    case 3:
      mostrarReprobados();
      break;

    case 4:
      mostrarMayus();
      break;

    case 5:
      mostrarPromedio();
      break;

    case 6:
      ordenarNotas();
      break;

    case 7:
      clasificarNota();
      break;

    default:
      output.innerHTML = "<p>Opción inválida</p>";
  }

  input.value = ""; // limpia el input
}

// ================= FUNCIONES =================

function mostrarTodos() {
  output.innerHTML = aprendices
    .map(a => `<p>${a.nombre} - ${a.nota} - ${a.programa}</p>`)
    .join("");
}

function mostrarAprobados() {
  const res = aprendices.filter(a => a.nota >= 3);
  output.innerHTML = res.map(a => `<p>${a.nombre}</p>`).join("");
}

function mostrarReprobados() {
  const res = aprendices.filter(a => a.nota < 3);
  output.innerHTML = res.map(a => `<p>${a.nombre}</p>`).join("");
}

function mostrarMayus() {
  output.innerHTML = aprendices
    .map(a => `<p>${a.nombre.toUpperCase()}</p>`)
    .join("");
}

function mostrarPromedio() {
  const total = aprendices.reduce((acc, a) => acc + a.nota, 0);
  const prom = (total / aprendices.length).toFixed(2);
  output.innerHTML = `<h3>Promedio: ${prom}</h3>`;
}

function ordenarNotas() {
  const ordenados = [...aprendices].sort((a, b) => b.nota - a.nota);
  output.innerHTML = ordenados
    .map(a => `<p>${a.nombre} - ${a.nota}</p>`)
    .join("");
}

function clasificarNota() {
  const nota = parseFloat(prompt("Ingresa la nota:"));
  let nivel;

  if (isNaN(nota)) {
    output.innerHTML = "<p>Nota inválida</p>";
    return;
  }

  switch (true) {
    case (nota < 3):
      nivel = "Baja";
      break;
    case (nota < 4):
      nivel = "Media";
      break;
    default:
      nivel = "Alta";
  }

  output.innerHTML = `<h3>La nota es: ${nivel}</h3>`;
}
