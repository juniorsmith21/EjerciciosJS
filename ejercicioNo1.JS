//Primer ejercicio filtrado de tablas
document.getElementById("filtro").addEventListener("keyup", ()=>{
  document.querySelectorAll("#miTabla tr").forEach(r=>{
    r.style.display = r.textContent.toLowerCase().includes(document.getElementById("filtro").value)? '' : 'none';
  });
});