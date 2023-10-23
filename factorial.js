function factorial(num) {
  // Your code here
  var result = 1;
  for (i = 1; i <= num * 1; i++) {
    result *= i;
  }
  return result;
}

res = factorial(4);
console.log("res: ", res);
