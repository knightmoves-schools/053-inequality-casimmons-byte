function guessNumber(number) {
  if (number != 25) {
    return document.getElementById('result').innerHTML = 'not it';
  }else{
    document.getElementById('result').innerHTML = 'it';
  };
};
function strictGuessNumber(number) {
  if (number !== 25) {
    return document.getElementById('result').innerHTML = 'not it';
  }else{
    document.getElementById('result').innerHTML = 'it';
  };
};
