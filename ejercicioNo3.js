//Ejercicio numero tres minimo comun multiplo
function mcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function mcm(a, b) {
  return (a * b) / mcd(a, b);
}

console.log(mcm(6, 4)); 
console.log(mcm(15, 20)); 
console.log(mcm(7, 5));