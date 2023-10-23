const str = "Abc$defg&*1234";
const regex = /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
function longestSubstr(str) {
  let result = "";
  var subString = str.split(regex);
  for (let index = 0; index < subString.length; index++) {
    const element = subString[index];
    let max = subString[0].length; // first longest item
    if (element.length > max) {
      return element;
    }
  }
}

let result = longestSubstr(str);
console.log("result: ", result);
