/*
Chiedere all’utente di inserire una parola;
Creare una funzione per capire se la parola inserita è palindroma
*/

//1. cheido all'utente di inserire una parola:
var parola = prompt('inserisci una parola');
console.log(parola);

//2. creo la funzione
function palindroma (parola) {

  //3. inizializzo stringa
  var parola2 = '';

  //4. ciclo la parola da dx a sx e inizializzo una var
  for (i = (parola.length - 1); i >= 0; i-- ) {
    console.log(parola[i]);
    parola2 += parola[i];
  }

  //5. stabilisco la condizione di palindromia
  if ( parola == parola2) {
    alert ('palindroma');
  } else {
    alert ('no palindroma');
  }

}

//6. invoco la funzione
palindroma (parola);
