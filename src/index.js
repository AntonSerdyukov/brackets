module.exports = function check(str, bracketsConfig) {
  var stack = [];
  var openingBrackets = [];
  var closingBrackets = [];
  var bracketsConfigArr = Array.from(bracketsConfig);

  if (str.length % 2 != 0) {
    return false;
  }
  for (var i = 0; i < bracketsConfigArr.length; i++) {
    var openClosePair = bracketsConfigArr[i];
    var openSymbol = Array.from(openClosePair[0]);
    var closeSymbol = Array.from(openClosePair[1]);
    openingBrackets.push(openSymbol.toString());
    closingBrackets.push(closeSymbol.toString());
  }

  for (var i = 0; i < str.length; i++) {

    if (openingBrackets.includes(str[i]) && closingBrackets.includes(str[i]) && stack.includes(str[i])) {
      var openBracket = stack.pop();
      var openBracketIndex = openingBrackets.indexOf(openBracket);
      var closeBracket = closingBrackets[openBracketIndex];
      if (closeBracket != str[i]) {
        return false;
      }
    } else if (openingBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else if (closingBrackets.includes(str[i])) {
      var openBracket = stack.pop();
      var openBracketIndex = openingBrackets.indexOf(openBracket);
      var closeBracket = closingBrackets[openBracketIndex];
      if (closeBracket != str[i]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;

}
