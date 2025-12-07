function combinaciones(str, n){
  if(n===0) return ['']
  if(str.length<n) return []
  let res=[]
  for(let i=0;i<=str.length-n;i++){
    let c=str[i]
    let resto=str.slice(i+1)
    for(let comb of combinaciones(resto,n-1)) res.push(c+comb)
  }
  return res
}
console.log(combinaciones("abcd",3))