//De objeto a Array
function existeSuma(lista, suma) {
  if (suma === 0) return true;
  if (!lista.length) return false;
  return existeSuma(lista.slice(1), suma - lista[0]) || existeSuma(lista.slice(1), suma);
}

console.log(existeSuma([3,4,2,8,7], 6));  
console.log(existeSuma([3,4,2,8,7], 26)); 
console.log(existeSuma([4], 4));