var prezzoKm = 0.21;
var prezzoTotale;
var creaBtn = document.getElementById('creaBiglietto');
var minCarrozza = 1;
var maxCarrozza = 10;
var minNumTreno = 90000;
var maxNumTreno = 100000;
var annullaBtn = document.getElementById('annullaBiglietto')

creaBtn.addEventListener("click" , function () {
  var nome = document.getElementById('nome').value;
  var km = document.getElementById('km').value;
  var categoria = document.getElementById('categoria').value;

  console.log(nome);
  console.log(km);
  console.log(categoria);


  if (categoria == "Minorenne"){
    prezzoTotale = km * prezzoKm - 20/100 * (km * prezzoKm);
  } else if (categoria == "Over65"){
    prezzoTotale = km * prezzoKm - 40/100 * (km * prezzoKm);
  } else {
    prezzoTotale = km * prezzoKm;
  }


  console.log(prezzoTotale);

  var numeroTreno = Math.floor(Math.random()*(maxNumTreno - minNumTreno + 1)) + minNumTreno;
  var carrozza = Math.floor(Math.random()*(maxCarrozza - minCarrozza  + 1)) + minCarrozza;

  document.getElementById("passeggero").innerHTML = nome;
  document.getElementById("numeroTreno").innerHTML = numeroTreno;
  document.getElementById("carrozza").innerHTML = carrozza;
  document.getElementById("prezzoBiglietto").innerHTML = prezzoTotale;
  document.getElementById("categoriaPasseggero").innerHTML = categoria;

  document.getElementById("biglietto").className = "mostraTabella";

  annullaBtn.addEventListener("click" , function () {
    document.getElementById("biglietto").className = "nascondiTabella";

    document.getElementById("nome").value = "";
    document.getElementById("km").value = "";
    document.getElementById("categoria").value = "Maggiorenne";
  })


});
