const array = [10, -2, 8, 0, 3];
class NumFormat {
  constructor(value, index) {
    this.value = value;
    this.index = index;
  }
}

function findHighestAndLowest(array) {
  let highest = new NumFormat(array[0], 0),
    lowest = new NumFormat(array[0], 0);

  array.forEach((element, index) => {
    if (element > highest.value) {
      highest.value = element;
      highest.index = index;
    }
    if (element < lowest.value) {
      lowest.value = element;
      lowest.index = index;
    }
  });
  // phải map lại cho đúng định dạng yêu cầu
  return { highest: { ...highest }, lowest: { ...lowest } };
}
findHighestAndLowest(array);
