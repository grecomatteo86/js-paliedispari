/*
Chiedere all’utente di inserire una parola;
Creare una funzione per capire se la parola inserita è palindroma
*/

//1. cheido all'utente di inserire una parola:
var parola = prompt('inserisci una parola');
console.log(parola);

function palindroma (parola) {

  //inizializzo un array vuoto
  var parola2 = '';

  //inserisco la parola nell'array
  for (i = (parola.length - 1); i >= 0; i-- ) {
    console.log(parola[i]);
    parola2 += parola[i];
  }

  if ( parola == parola2) {
    alert ('palindroma');
  } else {
    alert ('no palindroma');
  }

}

palindroma (parola);
