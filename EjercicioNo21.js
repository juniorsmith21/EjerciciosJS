function esAnagrama(p1, p2){
  if(p1===p2) return false
  return p1.split('').sort().join('') === p2.split('').sort().join('')
}
console.log(esAnagrama("amor","roma"))
console.log(esAnagrama("rota","otra")) 
console.log(esAnagrama("otra","otra"))