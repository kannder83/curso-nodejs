const os = require("os");
const fs = require("fs");

//Se puede importar el archivo:
const mensaje = require("./mensajes");

let cpu = os.cpus();

//Sistema Operativo:
let sistema = os.platform();
let usuario = os.hostname();

let cpu_string = JSON.stringify(cpu);

// console.log(`La edad es: ${mensaje.edad}.`);

//Para llamar la función desde otro modulo:
// mensaje.saludar("Alejandro");

//Enviar la información a un archivo txt:
/*
fs.appendFile(
  "kanndercode.txt",
  `Información del cpu: ${cpu_string}`,
  function (error) {
    if (error) {
      console.log("Error al crear archivo.");
    }
  }
);
*/

//Sirve para conocer la capacidad de procesamiento del PC.
//console.log(cpu);
/*
console.log(sistema);
console.log(usuario);
*/

//=============================>> Funciones Flcha
let respuestaSuma = mensaje.sumar(10, 20);
console.log(`El resultado de la suma es: ${respuestaSuma}.`);

setTimeout(() => {
  console.log("Han pasado 2 segundos desde que se inicio app.");
}, 2000);
