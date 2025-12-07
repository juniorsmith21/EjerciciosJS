// Frecuencia de caracteres
function toArray(obj) {
  return Object.entries(obj);
}
let objeto = {pan:23, vino: 10, aceite: 12};
let precios = toArray(objeto);
console.log(precios);