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
}

//3. l'utente sceglie tra pari o dispari
var pariDispari = prompt('scegli: pari o dispari');
console.log('l\'utente ha scelto ' + pariDispari);

//4. l'utente inserisce un numero da 1 a 5
var numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log('il numero scelto dall\'utente è ' + numeroUtente);










// //scrivo una funzione che somma due numeri:
//
// function sumTellEven (num1, num2) {
//   var sum = parseInt(num1 + num2);
//   console.log("la somma dei due numeri è " + sum);
//   if (sum % 2 == 0) {
//     return true;
//   }
//   return false;
// }
//
// //Chiedo all'utente di scegliere Pari o Dispari:
// // In caso si scelga pari la variabile Scelta sarà true;
// // In caso contrario false;
// // se si inserisce un valore diverso da Pari o Dispari, il programma entra in un ciclo while e fa ripetere l inserimento dati.
//
// var scelta = prompt("Forza scegli pari o dispari!").toLowerCase();
//
// while (scelta != "pari" && scelta != "dispari") {
//   var scelta = prompt("Devi scegliere solo pari o dispari!").toLowerCase();
// }
//
// if (scelta == "pari") {
//   scelta = true;
//   alert("Hai scelto pari! Il computer dunque sceglierà dispari.");
//   console.log("Hai scelto pari e il computer dispari.");
// }
//
// else {
//   scelta = false;
//   alert("Hai scelto dispari! Il computer dunque sceglierà pari.");
//   console.log("Hai scelto dispari e il computer pari.");
// }
//
// // Chiedo i numeri all'utente e definisco le variabili del caso.
// // La variabile NumeroComputer è definita tramite il Randomizer.
//
// var numeroUtente = parseInt(prompt("È il momento di giocare: scegli un numero da 1 a 5!"));
//
// while (isNaN(numeroUtente)) {
//   var numeroUtente = parseInt(prompt("Non scrivere nulla di diverso da un numero!"));
// }
//
// console.log("Il numero che hai scelto è " + numeroUtente);
// var numeroComputer = randomizer();
// alert("Anche il computer gioca ed ha scelto il numero " + numeroComputer);
// console.log("Il numero random del computer è " + numeroComputer)
//
// //Uso la funzione SumTellEven per sommare i numeri e capire se sono pari.
// // Se il risultato finale è pari la variabile Oucome sarà impostata vera; se è dispari, falsa.
//
// alert("Ora il programma sommerà i vostri numeri e vi dirà se il risultato della somma è pari o dispari");
//
// if (sumTellEven(numeroUtente, numeroComputer)) {
//   alert("la somma dei due numeri è pari!");
//   var outcome = true;
// }
//
// else {
//   alert("la somma dei due numeri è dispari!");
//   var outcome = false;
// }
//
// //La scelta dell'utente e la variabile Outcome sono comparate; se hanno entrambe lo stesso valore di falsità o verità, l'utente è dichiarato vincitore; in caso contrario, perdente.
//
// if (scelta == outcome) {
//   alert("COMPLIMENTI HAI VINTO!!!");
//   console.log("Bravo, hai vinto.");
// }
//
// else {
//   alert("Peccato, hai perso...Sarà per la prossima volta.");
//   console.log("Mi dispiace, hai perso.");
// }
