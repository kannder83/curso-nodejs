console.log("Este es un mensaje luego de importar.");

let edad_kannder = 37;

//Para que pueda ser utilizada en otro modulo, es necesario exportarla.

/*
module.exports.edad_kannder = edad_kannder;

module.exports.saludar = function (nombre) {
  console.log(`Buen día ${nombre}`);
};

*/
//Otra forma de exportar puede ser:

module.exports = {
  edad: edad_kannder,
  saludar: function (nombre) {
    console.log(`Hola ${nombre}`);
  },
};
