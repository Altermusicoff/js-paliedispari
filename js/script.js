function getRandomValue(min, max) {
  var rndMin = min;
  var rndMax = max - min + 1;
  var rndValue = Math.floor(Math.random() * rndMax) + rndMin;
  return rndValue;
}


function isPalindrom(word) {
  var lng = word.length;
  var palLng = Math.floor(lng / 2);
  for (var i = 0; i < palLng; i++) {
    var finalI = lng - i - 1;
    var charI = word[i];
    var charFinalI = word[finalI];
    if (charI != charFinalI) {
      return false;
    }
  }
  return true;
}
function es2() {
  var userPair = prompt('Dimmi pari o dispari');
  var userValue = parseInt(prompt('Dimmi un valore'));
  var rndValue = getRandomValue(1, 5);
  var finalValue = userValue + rndValue;
  var finalIsPair = finalValue % 2 == 0;
  var finalIsOdd = finalValue % 2 > 0;
  // if (userPair == 'pari' && finalIsPair) {
  //     console.log('Hai vinto!!');
  // } else if (userPair == 'dispari' && !finalIsPair) {
  //     console.log('Hai vinto!!');
  // } else {
  //     console.log('Hai perso :-(');
  // }
  if ((userPair == 'pari' && finalIsPair)
    || (userPair == 'dispari' && finalIsOdd)) {
    console.log('Hai vinto!!');
  } else {
    console.log('Hai perso :-(');
  }
  console.log(finalValue);
}
// esercizio parola palindroma
function es1() {
  var word = 'anbna';
  var isWordPalindrom = isPalindrom(word);
  console.log(word, isWordPalindrom);
}
// es1();
es2();