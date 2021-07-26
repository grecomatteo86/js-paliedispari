var userChoise = prompt('choose: even or odd');
while (userChoise != 'even' && userChoise != 'odd') {
  alert("Please enter EVEN or ODD");
  userChoise = prompt('choose: even or odd');
}
if (userChoise == 'even') {
  userChoise = true;
  alert('you have chosen even, then the computer will choose odd');
} else {
  userChoise = false;
  alert('you have chosen odd, then the computer will choose even');
}
var userNumber = parseInt(prompt('choose a number from 1 to 5'));
while (isNaN(userNumber)) {
  alert("Please enter a NUMBER");
  userNumber = parseInt(prompt('choose a number from 1 to 5'));
}
alert('you have chosen ' + userNumber);
var numeroCpu = getRandomNumber ();
alert('computer\'s number is: ' + numeroCpu);
if (sumIsEven(userNumber,numeroCpu)) {
  alert("the sum of the two numbers is even");
  var total = true;
} else {
  alert("the sum of the two numbers is odd");
  var total = false;
}
if ( userChoise == total ) {
  alert('you win');
} else {
  alert('you lose');
}
// Function - getRandomNumber
function getRandomNumber () {
  return Math.floor(Math.random() * 6);
}
// Function - sumIsEven
function sumIsEven (num1, num2) {
  var sum = parseInt(num1 + num2);
  console.log('the sum of the two numbers is ' + sum);
  if (sum % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
