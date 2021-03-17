/*
Chiedere all’utente di inserire una parola;
Creare una funzione per capire se la parola inserita è palindroma
*/

// 1. Cheido all'utente di inserire una parola:
var parola = prompt('inserisci una parola');

/* 2. Capovolgo la parola inserita dall'utente.
La stringa è un dato array like, cioè ha certe proprietà che sono comuni agli array,
come ad es la proprietà length. In più noi possiamo scorrere le nostre stringhe
come se fossero degli array, col ciclo for.
Nel nostro caso però devo fare un ciclo in cui parto dal fondo */

/* 6. Creo la funzione che mi fa il reverse di una stringa.
Lo scopo di questa funzione è quello di accettare dall'esterno un argomento,
che sarà poi la parola da capovolgere e dovrà restituire questa parola capovolta.
L'oggetto della funzione lo posso chiamare come voglio,
perchè ha senso solo all'interno della funzione e non c'entra niente con le var
che ho all'interno del programma */
function palindroma (stringa) {

  /* 3. Mi serve una var per ricomporre la parola girata,
  allora inizializzo una var a stringa vuota.
  Ad ogni interazione io vado a concatenare
  carattere per carattere a questa stringa vuota */
  var stringaCapovolta = '';

  //4. Ciclo la parola da dx a sx e inizializzo una var
  for (i = (stringa.length - 1); i >= 0; i-- ) {
    console.log(stringa[i]);      // in questo modo l'array mi ritorna come una stringa
    stringaCapovolta += stringa[i];
  }

  /* 5. Adesso devo fare il mio controllo if
  per stabilire la condizione di palindromia */
  if ( stringa == stringaCapovolta) {
    return true;
  } else {
    return false;
  }

}

// 7. Invoco la funzione con un controllo per stampare il risultato
if (palindroma(parola)) {
  alert('L parola è palindroma');
} else {
  alert('La parola NON è palindroma');
}
