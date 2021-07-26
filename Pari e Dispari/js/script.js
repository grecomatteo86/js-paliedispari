var pariDispari = prompt('choose: even or odd');
while (pariDispari != 'even' && pariDispari != 'odd') {
  alert("Please enter EVEN or ODD");
  pariDispari = prompt('choose: even or odd');
}
console.log('bravo');





// if (pariDispari == 'pari') {
//   pariDispari = true;
//   alert('hai scelto pari, allora in computer sceglierà dispari');
// } else {
//   pariDispari = false;
//   alert('hai scelto dispari, allora in computer sceglierà pari');
// }
//
// //4. l'utente inserisce un numero da 1 a 5 e invoco la funzione getRandomNumber per generare un numero random per il computer
// var numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
// alert('il numero da te scelto è ' + numeroUtente);
//
// var numeroCpu = getRandomNumber ();
// alert('il numero scelto dal computer è ' + numeroCpu);
//
//
// //5. invoco la funzione sommaNumeri per sommare numeroUtente e numeroCpu. se pari allora 'totale' è true, altrimenti è false
// if (sumIsEven(numeroUtente,numeroCpu)) {
//   alert("la somma dei due numeri è pari!");
//   var totale = true;
// } else {
//   alert("la somma dei due numeri è dispari!");
//   var totale = false;
// }
//
// // 6. comparo la scelta dell'utente e la variabile 'totale': se hanno lo stesso valore, l'utente vince, altrimenti perde
// if ( pariDispari == totale ) {
//   alert('hai vinto');
// } else {
//   alert('hai perso');
// }

// Function - getRandomNumber
function getRandomNumber () {
  return Math.floor(Math.random() * 6);
}
// Function - sumIsEven
function sumIsEven (num1, num2) {
  var somma = parseInt(num1 + num2);
  console.log('la somma dei due numeri è ' + somma);
  if (somma % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
