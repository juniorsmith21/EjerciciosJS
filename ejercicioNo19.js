function cifrar(frase, clave){
  let res=""
  for(let c of frase){
    if(c>='a' && c<='z') res+=String.fromCharCode((c.charCodeAt(0)-97+clave+26)%26+97)
    else res+=c
  }
  return res
}

function descifrar(frase, clave){
  return cifrar(frase,-clave)
}
console.log(cifrar("el sena es la monda",3)) 
console.log(descifrar("ho vhqd hv od prqgd",3)) 
console.log(cifrar("hola",3))
console.log(descifrar("krod",3)) 