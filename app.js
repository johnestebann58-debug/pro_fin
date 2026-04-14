const aprendices = [
    { nombre: "Ana", nota: 4.5, programa: "ADSO" },
    { nombre: "Luis", nota: 2.8, programa: "ADSO" },
    { nombre: "Marta", nota: 3.7, programa: "Diseno Web" },
    { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
    { nombre: "Sofia", nota: 5.0, programa: "Diseno Web" }
];

const output = document.getElementById("output");

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

// Clasificar con switch
function clasificarNota() {
    const nota = parseFloat(document.getElementById("notaInput").value);
    const output = document.getElementById("output");
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
}