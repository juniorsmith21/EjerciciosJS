//Items repetido en un array 
function BuscarRep(arr) {
return arr.filter((num, i) => arr.indexOf(num) !== i)
  .filter((num, i, self) => self.indexOf(num) === i);
}


const numeros = [10, 3, 5, 3, 10];
console.log(BuscarRep(numeros));