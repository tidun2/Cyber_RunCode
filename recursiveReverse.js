const str = "javascript";
function recursiveReverse(str) {
  var index = str.length;
  var result = "";
  while (index > 0) {
    result += str[index - 1];
    index--;
  }
  return result;
}

recursiveReverse(str);
