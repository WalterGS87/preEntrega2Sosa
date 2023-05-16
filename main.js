function convertirPesos() {
  
    var monto = parseFloat(document.getElementById("monto").value);
    var dolarBlue = 400;
    var dolarOficial = 200;
    
    if (monto > 1000) {
        
        alert
    
       
    alert("NO SE PUEDE CONVERTIR");
      } 
     
    else {
        
    var dolaresBlue = monto / dolarBlue;
               
    var dolaresOficial = monto / dolarOficial;
    
    document.getElementById("resultadoBlue").innerHTML = "Monto en dólares (Dólar Blue): " + dolaresBlue;
        document.getElementById("resultadoOficial").innerHTML = "Monto en dólares (Dólar Oficial): " + dolaresOficial;
      }
    }
    