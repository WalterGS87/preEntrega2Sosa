var DolarCity = {
  conversion: [
    { tipo: "Dólar Blue", valor: 400 },
    { tipo: "Dólar Oficial", valor: 200 }
  ],
  convertir: function (monto) {
    var resultado = "";
    if (monto > 1000) {
      alert("NO SE PUEDE CONVERTIR. Monto superior a 1000.");
    } else {
      for (var i = 0; i < this.conversion.length; i++) {
        var moneda = this.conversion[i];
        var conversion = monto / moneda.valor;
        resultado += "Monto en " + moneda.tipo + ": " + conversion + "<br>";
      }
    }
    return resultado;
  }
};

var EuroCity = {
  conversion: [
    { tipo: "Euro Blue", valor: 500 },
    { tipo: "Euro Oficial", valor: 300 }
  ],
  convertir: function (monto) {
    var resultado = "";
    if (monto > 1000) {
      alert("NO SE PUEDE CONVERTIR. Monto superior a 1000.");
    } else {
      for (var i = 0; i < this.conversion.length; i++) {
        var moneda = this.conversion[i];
        var conversion = monto / moneda.valor;
        resultado += "Monto en " + moneda.tipo + ": " + conversion + "<br>";
      }
    }
    return resultado;
  }
};

function convertirMoneda() {
  var monto = parseFloat(document.getElementById("monto").value);

  var selectMoneda = document.getElementById("selectMoneda");
  var tipoMoneda = selectMoneda.options[selectMoneda.selectedIndex].value;

  var resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  if (tipoMoneda === "dolar") {
    var resultado = DolarCity.convertir(monto);
    resultadoDiv.innerHTML = resultado;
  } else if (tipoMoneda === "euro") {
    var resultado = EuroCity.convertir(monto);
    resultadoDiv.innerHTML = resultado;
  }
}
