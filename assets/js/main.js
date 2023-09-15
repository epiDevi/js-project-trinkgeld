function rechnen(){
  const betrag= Number(document.querySelector("#betrag").value);
  const anzahl= Number(document.querySelector("#anzahl").value);
  const qualitaet= document.querySelector("#qualitaet").value;
  const pTrinkgeld = document.querySelector("#trinkgeld");
  const pSumme = document.querySelector("#summe");
  const pEinzeln = document.querySelector("#einzeln");
  let trinkgeld= 0 , summe = betrag , einzeln = 0;
  
  if (qualitaet ==="okey"){
    trinkgeld= (betrag * 0.02);
  } else if (qualitaet ==="gut"){
    trinkgeld= (betrag * 0.10);
  } else if (qualitaet ==="super"){
    trinkgeld= (betrag * 0.20);
  }
  summe= (trinkgeld + betrag).toFixed(2);
  if( anzahl > 1){
    einzeln= summe / anzahl;
    pTrinkgeld.innerHTML= "Das Trinkgeld ist: " + trinkgeld.toFixed(2) + " €";
    pSumme.innerHTML= "Die Gesammtsumme beträgt: " + summe + " €";
    pEinzeln.innerHTML= "Der Preis pro Person ist: " + einzeln + " €";
  } else {
    pTrinkgeld.innerHTML= "Das Trinkgeld ist: " + trinkgeld + " €";
    pSumme.innerHTML= "Die Gesammtsumme beträgt: " + summe + " €";
  }
}
