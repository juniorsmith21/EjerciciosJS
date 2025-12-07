//Dividir frases sin guiones
function divFrasePartes(frase, maxLen) {
  let res = [], seg = "";
  for (let p of frase.split(" ")) {
    if ((seg + (seg?" ":"") + p).length <= maxLen)
      seg += (seg?" ":"") + p;
    else { 
      res.push(seg);
      seg = p;
    }
  }
  return res;
}


console.log(divFrasePartes("Hoy es un gran dia para trasnochar y sufrir", 7));