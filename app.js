const prompt = require("prompt-sync")();

const aprendices = [ 
    { nombre: "Ana", nota: 4.5, programa: "ADSO" },
    { nombre: "Luis",nota: 2.8, programa: "ADSO" },
    { nombre: "Marta", nota: 3.7, programa: "Diseno Web" },
    {nombre: "Pedro", nota: 1.9, programa: "ADSO" },
    { nombre: "Sofia", nota: 5.0, programa:"Diseno Web" } ];

let opcion = "";

while (opcion !== "9") {
    console.log("==MENU==");
    console.log("1.LISTA ESTUDIANTES");
    console.log("2.APROBADOS");
    console.log("3.REPROBADOS");
    console.log("4.MAYUSCULAS");
    console.log("5.PROOMEDIO");
    console.log("6.MAYOR A MENOR NOTA");
    console.log("7.CLASIFICAR NOTA");
    console.log("8.SALIR");

    opcion = prompt("ESCRIBA UNA OPCION: ");
    
    switch (opcion) {

        case"1":
        console.table(aprendices);
        break;

        case"2":
        console.table(aprendices.filter(a => a.nota >= 3));
        break;
    }
}
