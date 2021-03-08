/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//1. imposto una funzione che genera un numero random
function numeroRandom () {
  return Math.floor(Math.random() * 6);
}

//2. imposto una funzione che somma due numeri
function sommaNumeri (num1, num2) {
  var somma = parseInt(num1 + num2);
  console.log('la somma dei due numeri è ' + somma);
  if (somma % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

//3. l'utente sceglie tra pari o dispari. se 'pari' la var pariDispari è vera, altrimenti è falsa
var pariDispari = prompt('scegli: pari o dispari');

if (pariDispari == 'pari') {
  pariDispari = true;
  alert('hai scelto pari, allora in computer sceglierà dispari');
} else {
  pariDispari = false;
  alert('hai scelto dispari, allora in computer sceglierà pari');
}

//4. l'utente inserisce un numero da 1 a 5 e invoco la funzione numeroRandom per generare un numero random per il computer
var numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
alert('il numero da te scelto è ' + numeroUtente);

var numeroCpu = numeroRandom ();
alert('il numero scelto dal computer è ' + numeroCpu);


//5. invoco la funzione sommaNumeri per sommare numeroUtente e numeroCpu. se pari allora 'totale' è true, altrimenti è false
if (sommaNumeri(numeroUtente,numeroCpu)) {
  alert("la somma dei due numeri è pari!");
  var totale = true;
} else {
  alert("la somma dei due numeri è dispari!");
  var totale = false;
}

// 6. comparo la scelta dell'utente e la variabile 'totale': se hanno lo stesso valore, l'utente vince, altrimenti perde
if ( pariDispari == totale ) {
  alert('hai vinto');
} else {
  alert('hai perso');
}
