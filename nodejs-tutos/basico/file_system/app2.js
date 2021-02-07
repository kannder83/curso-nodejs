const fs = require("fs");

console.log("Inicializado...");
//Por defecto se ejecuta en proceso Asincrono.
/*
fs.readFile("data.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(`Error ${error}`);
  } else {
    console.log(data);
  }
});
*/

//Para que se vuelva sincrono se agrega:
let data = fs.readFileSync("data.txt", "utf-8");
//Ya no es necesario el callback
console.log(data);

/*
fs.appendFile("data.txt", `\n Gracias por tu información.`, (error) => {
  if (error) console.log(`Error: ${error}`);
});

fs.unlink("data2.txt", (error) => {
  if (error) throw error;
  console.log("Eliminado");
});
*/

//Para copiar un archivo:
fs.createReadStream("data.txt").pipe(fs.createWriteStream("data3.txt"));

//Para leer el contenido de una carpeta:
/*
fs.readdir("../../basico/file_system/", (error, files) => {
  if (error) {
    console.log(error);
  } else {
    files.forEach((file) => {
      console.log(file);
    });
  }
});
*/

fs.readdirSync("../../basico/file_system/").forEach((file) => {
  console.log(file);
});

console.log("...Finalizado");
