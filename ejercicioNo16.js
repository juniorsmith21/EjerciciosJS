function permutaciones(str){
  if(str.length<=1) return [str]
  let res=[]
  for(let i=0;i<str.length;i++){
    let c=str[i]
    let resto=str.slice(0,i)+str.slice(i+1)
    for(let p of permutaciones(resto)) res.push(c+p)
  }
  return res
}
console.log(permutaciones("abc"))