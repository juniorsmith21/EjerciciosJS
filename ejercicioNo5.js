//Generar contraseñas iiijii
function generarPassword() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?+=-/";
  let pass = "";

  pass += "A"; 
  pass += "a"; 
  pass += "1";
  pass += "!"; 

  
  const len = Math.floor(Math.random() * 8) + 8; 
  for (let i = pass.length; i < len; i++) {
    pass += chars[Math.floor(Math.random() * chars.length)];
  }

  return pass.split("").sort(() => Math.random() - 0.5).join("");
}


console.log(generarPassword());