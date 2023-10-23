function getValue(obj, prop) {
  let nestedKeys = prop.split(".");
  for (const key of nestedKeys) {
    if (obj.hasOwnProperty(key)) {
      obj = obj[key];
    } else {
      obj = undefined;
      break;
    }
  }
  return obj;
}

let result = getValue(
  {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      state: "NY",
      buildings: {
        high: "100 floors",
        low: "1 floor",
      },
    },
  },
  "address.state"
);
console.log("result: ", result);
