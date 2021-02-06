const os = require("os");
const fs = require("fs");

let cpu = os.cpus();

//Sistema Operativo:
let sistema = os.platform();
let usuario = os.hostname();

let cpu_string = JSON.stringify(cpu);

//Enviar la información a un archivo txt:
fs.appendFile(
  "kanndercode.txt",
  `Información del cpu: ${cpu_string}`,
  function (error) {
    if (error) {
      console.log("Error al crear archivo.");
    }
  }
);

//Sirve para conocer la capacidad de procesamiento del PC.
//console.log(cpu);
/*
console.log(sistema);
console.log(usuario);
*/