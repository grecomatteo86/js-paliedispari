
//A string is an array like data, with properties in common to arrays, as length property.
var userWord = prompt('enter a word');
if (palindroma(userWord) == true) {
  alert('The word you have inserted is palindroma');
} else {
  alert('The word you have inserted isn\'t palindroma');
}
// Function - palindroma
function palindroma (string) {
  var reversedString = '';
  for (i = (string.length - 1); i >= 0; i-- ) {
    reversedString += string[i];
    console.log(reversedString);
  }
  if ( string == reversedString) {
    return true;
  } else {
    return false;
  }

}
