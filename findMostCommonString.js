const strings = ["hello", "world", "foo", "bar", "baz"];

function findMostCommonString(strings) {
  let counts = {};

  /**
   *  dùng array. find(item string match với điều kiện xuất hiện đầu tiên)
   *
   *  */

  for (var i = 0; i < strings.length; i++) {
    counts[strings[i]] = 1 + (counts[strings[i]] || 0);
  }
  var maxCount = 0;
  var maxElement;
  // Find the element with maximum occurrence
  for (var key in counts) {
    if (counts[key] > maxCount) {
      maxCount = counts[key];
      maxElement = key;
    }
  }
  console.log("maxElement: ", maxElement);
  console.log("maxCount: ", maxCount);
}
result = findMostCommonString(strings);
console.log("result: ", result);

// console.log("counts: ", counts); // {key1 : freq1 , ... }
// // var arrCount = Object.values(counts);
// // var minFreq = Math.min(...arrCount);
// // var maxFreq = Math.max(...arrCount);
