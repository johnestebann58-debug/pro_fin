const aprendices = [
  { nombre: "Ana", nota: 4.5, programa: "ADSO" },
  { nombre: "Luis", nota: 2.8, programa: "ADSO" },
  { nombre: "Marta", nota: 3.7, programa: "Diseno Web" },
  { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
  { nombre: "Sofia", nota: 5.0, programa: "Diseno Web" }
];

const input = document.getElementById("opcion");
const output = document.getElementById("output");

// Detectar cuando presionas ENTER
input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    ejecutarOpcion(input.value);
  }
});

function ejecutarOpcion(opcion) {

  switch (opcion) {

    case "1":
      output.innerHTML = aprendices
        .map(a => `<p>${a.nombre} - ${a.nota} - ${a.programa}</p>`)
        .join("");
      break;

    case "2":
      output.innerHTML = aprendices
        .filter(a => a.nota >= 3)
        .map(a => `<p>${a.nombre}</p>`)
        .join("");
      break;

    case "3":
      output.innerHTML = aprendices
        .filter(a => a.nota < 3)
        .map(a => `<p>${a.nombre}</p>`)
        .join("");
      break;

    case "4":
      output.innerHTML = aprendices
        .map(a => `<p>${a.nombre.toUpperCase()}</p>`)
        .join("");
      break;

    case "5":
      const prom = aprendices.reduce((acc, a) => acc + a.nota, 0) / aprendices.length;
      output.innerHTML = `<h3>Promedio: ${prom.toFixed(2)}</h3>`;
      break;

    case "6":
      const ordenados = [...aprendices].sort((a, b) => b.nota - a.nota);
      output.innerHTML = ordenados
        .map(a => `<p>${a.nombre} - ${a.nota}</p>`)
        .join("");
      break;

    case "7":
      const nota = parseFloat(document.getElementById("notaInput").value);
      let nivel;

      switch (true) {
        case (nota < 3):
          nivel = "Bajo";
          break;
        case (nota < 4):
          nivel = "Básico";
          break;
        case (nota < 4.6):
          nivel = "Alto";
          break;
        default:
          nivel = "Superior";
      }

      output.innerHTML = `<h3>Nivel: ${nivel}</h3>`;
      break;

    default:
      output.innerHTML = "<p>Opción inválida</p>";
  }

  input.value = "";
}